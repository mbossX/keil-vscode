import * as vscode from 'vscode';

export default abstract class Target {
  // protected projectPath: string;
  label: string;

  // readonly targetName: string;
  abstract readonly exe: string;

  protected get config(): vscode.WorkspaceConfiguration {
    return vscode.workspace.getConfiguration('keil-vscode');
  }

  constructor(dom: any) {
    this.label = dom['TargetName'];
  }

  // private runTask(name: string, commands: string[]) {
  //   let args: string[] = [];

  //   args.push('-o', this.projectPath);
  //   args = args.concat(commands);

  //   const isCmd = /cmd.exe$/i.test((vscode.env as any).shell);
  //   const quote = isCmd ? '"' : '\'';
  //   const invokePrefix = isCmd ? '' : '& ';
  //   const cmdPrefixSuffix = isCmd ? '"' : '';

  //   let commandLine = invokePrefix + this.quoteString(this.config.get('Uv4Caller.exe') as string, quote) + ' ';
  //   commandLine += args.map((arg) => { return this.quoteString(arg, quote); }).join(' ');

  //   // use task
  //   if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {

  //     const task = new vscode.Task({ type: 'keil-task' }, vscode.TaskScope.Global, name, 'shell');
  //     task.execution = new vscode.ShellExecution(cmdPrefixSuffix + commandLine + cmdPrefixSuffix);
  //     task.isBackground = false;
  //     // task.problemMatchers = this.getProblemMatcher();
  //     task.presentationOptions = {
  //       echo: false,
  //       focus: false,
  //       clear: true
  //     };
  //     vscode.tasks.executeTask(task);

  //   } else {

  //     const index = vscode.window.terminals.findIndex((ter) => {
  //       return ter.name === name;
  //     });

  //     if (index !== -1) {
  //       vscode.window.terminals[index].hide();
  //       vscode.window.terminals[index].dispose();
  //     }

  //     const terminal = vscode.window.createTerminal(name);
  //     terminal.show();
  //     terminal.sendText(commandLine);
  //   }
  // }

  // build() {
  //   this.runTask('build', this.getBuildCommand());
  // }

  // rebuild() {
  //   this.runTask('rebuild', this.getRebuildCommand());
  // }

  // download() {
  //   this.runTask('download', this.getDownloadCommand());
  // }

  // private quoteString(str: string, quote: string = '"'): string {
  //   return str.includes(' ') ? (quote + str + quote) : str;
  // }
}