---
'@portabletext/markdown': patch
---

A heading inside a callout or blockquote object (`types.blockquote`) keeps its style when the written Markdown reads back as that heading, as it would at the top level. Otherwise it renders as plain text as before. Plain text rendering is preferred when it reads back exactly and heading rendering would lose content. Multi-line headings use `<br>` with the default hard-break renderer, including h1 and h2 inside these containers.

Other styles inside these containers now render the way they do at the root. A custom block style renderer runs there too, and an unrecognized style reaches `unknownBlockStyle`, which by default reports a style fallback to `onDegradation`. Blocks in the blockquote style, blocks with no style, list items and whitespace-only blocks still render as plain paragraphs inside these containers.
