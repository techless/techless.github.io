# vscode settings.json

```shell
{
  // Visuals
  "workbench.activityBar.visible": true,
  "workbench.editor.tabCloseButton": "right",
  "workbench.fontAliasing": "antialiased",
  "workbench.list.smoothScrolling": true,
  "workbench.preferredDarkColorTheme": "Vitesse Dark",
  "workbench.preferredLightColorTheme": "Vitesse Light",
  "workbench.productIconTheme": "icons-carbon",
  "workbench.sideBar.location": "left",
  "workbench.startupEditor": "newUntitledFile",
  "workbench.tree.expandMode": "singleClick",
  "workbench.tree.indent": 10,
  "editor.fontFamily": "Input Mono, monospace",
  "editor.fontLigatures": "'ss01', 'ss02', 'ss03', 'ss06', 'zero'",
  "editor.fontSize": 16,
  // Editor
  "editor.accessibilitySupport": "off",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.find.addExtraSpaceOnTop": false,
  "editor.guides.bracketPairs": "active",
  "editor.inlineSuggest.enabled": true,
  "editor.lineNumbers": "interval",
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.renderWhitespace": "boundary",
  "editor.suggestSelection": "first",
  "editor.tabSize": 4,
  "editor.unicodeHighlight.invisibleCharacters": false,
  "editor.stickyScroll.enabled": true,
  "editor.hover.sticky": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true, // this allows ESLint to auto fix on save
    "source.organizeImports": false
  },
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "window.autoDetectColorScheme": true,
  "window.dialogStyle": "custom",
  "window.nativeTabs": true, // this is great, macOS only
  "window.titleBarStyle": "custom",
  "workbench.editor.closeOnFileDelete": true,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.limit.enabled": true,
  "workbench.editor.limit.perEditorGroup": true,
  "workbench.editor.limit.value": 5,
  "extensions.autoUpdate": "onlyEnabledExtensions",
  "extensions.ignoreRecommendations": true,
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.simpleDialog.enable": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "git.untrackedChanges": "separate",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.fontWeight": "300",
  "terminal.integrated.persistentSessionReviveProcess": "never",
  "terminal.integrated.tabs.enabled": true,
  "scm.diffDecorationsGutterWidth": 2,
  "debug.onTaskErrors": "debugAnyway",
  "diffEditor.ignoreTrimWhitespace": false,
  "search.exclude": {
    "**/.git": true,
    "**/.github": true,
    "**/.nuxt": true,
    "**/.output": true,
    "**/.pnpm": true,
    "**/.vscode": true,
    "**/.yarn": true,
    "**/bower_components": true,
    "**/dist/**": true,
    "**/logs": true,
    "**/node_modules": true,
    "**/out/**": true,
    "**/package-lock.json": true,
    "**/pnpm-lock.yaml": true,
    "**/tmp": true,
    "**/yarn.lock": true
  },
  "workbench.iconTheme": "material-icon-theme",
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "terminal.integrated.env.osx": {},
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "window.zoomLevel": 1
}

```
