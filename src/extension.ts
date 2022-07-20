import * as vscode from 'vscode';
import Explorer from './explorer';

let localize = {} as any;
try {
  try {
    localize = eval(`require("../package.nls.${JSON.parse(process.env.VSCODE_NLS_CONFIG as string).locale.toLowerCase()}.json")`);
  } catch {
    localize = eval(`require("../package.nls.json")`);
  }
} catch { }

export function activate(context: vscode.ExtensionContext) {
  const explorer = new Explorer(localize);
  const subscriber = context.subscriptions;

  let running = false;
  const prevent = async (action: () => Promise<void>) => {
    if (running) {
      vscode.window.showWarningMessage(localize?.['extension.text.explorer.busy'] || 'Task is running, plase wait.');
      return;
    }
    running = true;
    try {
      await action.call(explorer);
    } finally {
      running = false;
    }
  };

  subscriber.push(vscode.commands.registerCommand('keil-vscode.project.build', () => prevent(explorer.build)));
  subscriber.push(vscode.commands.registerCommand('keil-vscode.project.rebuild', () => prevent(explorer.build.bind(explorer, true))));
  subscriber.push(vscode.commands.registerCommand('keil-vscode.project.download', () => prevent(explorer.download)));
  subscriber.push(vscode.commands.registerCommand('keil-vscode.project.switch', () => prevent(explorer.switch)));

  const targetStatusbar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  targetStatusbar.tooltip = localize?.['extension.statusbar.switch.tips'] || 'Switch Keil Project Target';
  targetStatusbar.command = 'keil-vscode.project.switch';
  targetStatusbar.text = `$(keil-v-switch) []`;
  targetStatusbar.show();

  explorer.on('update', () => {
    targetStatusbar.text = `$(keil-v-switch) [${explorer.targetLabel}]`;
  });

  const buildStatusbar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  buildStatusbar.tooltip = localize?.['extension.statusbar.build.tips'] || 'Build Keil Project';
  buildStatusbar.command = 'keil-vscode.project.build';
  buildStatusbar.text = '$(keil-v-build)';
  buildStatusbar.show();

  const rebuildStatusbar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  rebuildStatusbar.tooltip = localize?.['extension.statusbar.rebuild.tips'] || 'Rebuild Keil Project';
  rebuildStatusbar.command = 'keil-vscode.project.rebuild';
  rebuildStatusbar.text = '$(keil-v-rebuild) ';
  rebuildStatusbar.show();

  const downloadStatusbar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  downloadStatusbar.tooltip = localize?.['extension.statusbar.download.tips'] || 'Download HEX to Board';
  downloadStatusbar.command = 'keil-vscode.project.download';
  downloadStatusbar.text = '$(keil-v-download) ';
  downloadStatusbar.show();

  explorer.loadWorkspace();
}
