import * as vscode from 'vscode'

import createComponent from '../createComponent'

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand(
        'component-structure.createComponent',
        createComponent,
    ))
}

// this method is called when your extension is deactivated
export function deactivate() {}
