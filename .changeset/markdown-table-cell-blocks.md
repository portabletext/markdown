---
'@portabletext/markdown': patch
---

fix: keep blocks inside a table cell through Markdown export and import

A Markdown table cell is one line. A plain paragraph or an image in a cell is still written as Markdown. Any other block in a cell, such as a code block, callout or list item, is written as one line of `json:object` JSON that holds the whole block. Blocks in a cell are separated by `<br><br>`.

`markdownToPortableText` splits a cell at `<br><br>` and turns each JSON segment back into its block. An `applyMarkdownEdit` that changes text in a cell now keeps the other blocks in that cell.

A cell with one plain paragraph, only an image or only an unknown object is written exactly as before. Any other block in a cell is written as JSON, and custom renderers in `types`, `block`, `listItem` and `unknownType` are not called for it. An image in a cell still uses `types.image`.
