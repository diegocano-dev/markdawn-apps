# MarkDawn Writer

**Write like in Word. Save as Markdown.**

The first app of **MarkDawn Apps**: familiar Office-style tools that save everything as Markdown.

A lightweight, Word-style document editor that reads and writes plain Markdown. You never see a `#` or `**` while you write, and every document is saved as clean Markdown that people, tools and AI models can read.

**[Try the live demo →](https://diegocano-dev.github.io/markdawn-apps/)**

[Leer en español](README.es.md)

![MarkDawn Writer: the document on the left, the Markdown it produces on the right](screenshot.png)

## Why

Markdown is the format AI models understand best, and it works everywhere: GitHub, Obsidian, wikis, documentation sites. But asking someone without technical knowledge to write in it is a real barrier, and most Markdown editors don't look like the tools people already know. MarkDawn Writer keeps the familiar Office-style ribbon and saves only Markdown.

## Features

- **Word-style ribbon** with File, Home, Insert and View tabs, plus a Table tab that appears when you are inside a table
- **Styles gallery**: Normal, Heading 1–4, Quote and Code
- **Formatting**: bold, italic, strikethrough, inline code, links, clear formatting
- **Lists**: bulleted, numbered and task lists, with Tab and Shift+Tab to change levels
- **Tables** with a grid picker, row and column tools, and per-column alignment
- **Images** from a URL or from your computer, code blocks with a language, quotes and horizontal rules
- **Live Markdown panel**, at the side or at the bottom, that you can also edit directly
- **Markdown shortcuts while typing**: `# `, `- `, `1. `, `> `, `[ ] `, `**bold**`, `` `code` ``, ` ``` `
- **Opens any `.md` file** without breaking it. Content the editor can't edit, such as raw HTML or comments, is shown as a block and saved unchanged
- **Smart paste** from Word, Google Docs and web pages
- Navigation pane, find and replace, zoom, undo and redo, word count
- **One HTML file, no dependencies, no build step**

## Alignment without breaking Markdown

Markdown has no alignment. MarkDawn Writer stores it as an HTML comment on the line above the block:

```markdown
<!-- align: center -->
# Welcome
```

Markdown viewers hide the comment, so the file still looks normal everywhere, and an AI model reads it as a clear instruction instead of noise.

## Use it

- **Online**: open the [live demo](https://diegocano-dev.github.io/markdawn-apps/).
- **Offline**: download `index.html` and open it in any modern browser.
- **In your own page**: the editor exposes a small API.

```js
MarkDawn.getMarkdown();          // returns the document as Markdown
MarkDawn.setMarkdown('# Hello'); // loads Markdown into the editor
```

## Keyboard shortcuts

| Action | Shortcut |
| --- | --- |
| Bold / Italic | Ctrl+B / Ctrl+I |
| Strikethrough | Ctrl+Shift+X |
| Link | Ctrl+K |
| Heading 1–4 / Normal | Ctrl+Alt+1–4 / Ctrl+Alt+0 |
| Bulleted / Numbered / Task list | Ctrl+Shift+8 / 7 / 9 |
| Align left / center / right / justify | Ctrl+L / E / R / J |
| Find / Replace | Ctrl+F / Ctrl+H |
| Open / Save | Ctrl+O / Ctrl+S |

## Roadmap

- Customizable styles: fonts and colors, without changing the Markdown
- English interface
- Installable app (PWA) and a Windows desktop version
- A slides editor built on the same idea, in the style of PowerPoint
- An npm package and a web component for embedding

## License

[MIT](LICENSE) © 2026 Diego Cano
