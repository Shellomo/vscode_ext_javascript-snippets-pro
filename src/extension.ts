import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

interface Snippet {
    prefix: string;
    body: string[];
    description: string;
}

interface SnippetDictionary {
    [key: string]: Snippet;
}

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('javascript-snippets.showSnippets', async () => {
        try {
            // Read snippets file
            const snippetsPath = path.join(context.extensionPath, 'snippets', 'snippets.json');
            const snippetsContent = fs.readFileSync(snippetsPath, 'utf8');
            const snippets: SnippetDictionary = JSON.parse(snippetsContent);

            // Create QuickPick items from snippets
            const items = Object.entries(snippets).map(([name, snippet]) => ({
                label: `${snippet.prefix}: ${name}`,
                description: snippet.description,
                detail: snippet.body.join('\n'),
                snippet: snippet
            }));

            // Show QuickPick
            const selected = await vscode.window.showQuickPick(items, {
                matchOnDescription: true,
                matchOnDetail: true,
                placeHolder: 'Search JavaScript snippets...'
            });

            if (selected) {
                const editor = vscode.window.activeTextEditor;
                if (editor) {
                    // Insert the selected snippet
                    const snippet = new vscode.SnippetString(selected.snippet.body.join('\n'));
                    await editor.insertSnippet(snippet);
                }
            }
        } catch (error) {
            vscode.window.showErrorMessage('Error loading snippets: ' + (error as Error).message);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}