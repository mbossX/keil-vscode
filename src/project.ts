
import { EventEmitter } from 'events';
import { createHash } from 'crypto';
import * as fs from 'fs';
import { dirname, basename, extname, join } from 'path';
import * as vscode from 'vscode';
import * as xml2js from 'xml2js';
import Target from './target/target';
import ArmTarget from './target/arm';
import C51Target from './target/c51';

export default class KeilProject extends EventEmitter {
  private vscodeRoot: string;
  id: string;
  label: string;
  projectPath: string;
  targets: Target[] = [];
  private _currentTarget: Target | undefined;
  get currentTarget () {
    return this._currentTarget;
  }
  set currentTarget (v: Target | undefined) {
    this.currentTarget = v;
  }

  get logPath() {
    return join(this.vscodeRoot, 'uv4.log');
  }

  constructor(projFile: string) {
    super();
    this.projectPath = projFile;
    this.id = this.genID();
    this.label = basename(projFile).split('.').slice(0, -1).join('.');
    this.vscodeRoot = join(dirname(projFile), '.vscode');
    if (!fs.existsSync(this.vscodeRoot)) {
      fs.mkdirSync(this.vscodeRoot);
    }
    fs.watchFile(projFile, () => {
      this.reload();
    });
  }

  async load() {
    const parser = new xml2js.Parser({ explicitArray: false });
    const doc = await parser.parseStringPromise({ toString: () => fs.readFileSync(this.projectPath, 'utf-8') });
    const targets = doc['Project']['Targets']['Target'];

    this.targets = [];
    if (Array.isArray(targets)) {
      for (const target of targets) {
        this.targets.push(this.createTarget(this.projectPath, target));
      }
    } else {
      this.targets.push(this.createTarget(this.projectPath, targets));
    }
  }

  getCommand() {
    if (!this.currentTarget) {
      return '';
    }
    return `${this.currentTarget.exe} -b ${this.projectPath} -j0 -t ${this.currentTarget.label} -o ${this.vscodeRoot}`;
  }

  private genID(): string {
    const md5 = createHash('md5');
    md5.update(this.projectPath);
    return md5.digest('hex');
  }

  private async reload() {
    try {
      await this.load();
      this.emit('update');
    } catch (err) {
      if ((err as any).code && (err as any).code === 'EBUSY') {
        setTimeout(() => this.reload(), 500);
      } else {
        vscode.window.showErrorMessage(`reload project failed !, msg: ${(err as Error).message}`);
      }
    }
  }

  private createTarget(projFile: string, targetDOM: any) {
    if (extname(projFile).toLowerCase() === '.uvproj') {
      return new C51Target(targetDOM);
    } else {
      return new ArmTarget(targetDOM);
    }
  }
}