export function getStyles(): string {
    return `
        body {
            font-family: var(--vscode-font-family);
            padding: 20px;
            color: var(--vscode-foreground);
            background-color: var(--vscode-editor-background);
        }
        .snippet-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .snippet-card {
            border: 1px solid var(--vscode-panel-border);
            border-radius: 4px;
            padding: 15px;
            background: var(--vscode-editor-background);
        }
        .snippet-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        .snippet-title {
            font-weight: bold;
            color: var(--vscode-editor-foreground);
        }
        .snippet-description {
            color: var(--vscode-descriptionForeground);
            margin-bottom: 10px;
        }
        .snippet-body {
            background: var(--vscode-textBlockQuote-background);
            padding: 10px;
            border-radius: 4px;
            font-family: monospace;
            white-space: pre-wrap;
            margin-bottom: 10px;
        }
        .button {
            background: var(--vscode-button-background);
            color: var(--vscode-button-foreground);
            border: none;
            padding: 6px 12px;
            border-radius: 2px;
            cursor: pointer;
            margin: 0 4px;
        }
        .button:hover {
            background: var(--vscode-button-hoverBackground);
        }
        .search-container {
            margin-bottom: 20px;
        }
        .search-input {
            width: 100%;
            padding: 8px;
            background: var(--vscode-input-background);
            color: var(--vscode-input-foreground);
            border: 1px solid var(--vscode-input-border);
            border-radius: 4px;
        }
        .add-snippet-form {
            display: none;
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid var(--vscode-panel-border);
            border-radius: 4px;
        }
        .form-group {
            margin-bottom: 10px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
        }
        .form-group input, .form-group textarea {
            width: 100%;
            padding: 8px;
            background: var(--vscode-input-background);
            color: var(--vscode-input-foreground);
            border: 1px solid var(--vscode-input-border);
            border-radius: 4px;
        }
    `;
}