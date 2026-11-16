---
'@portabletext/markdown': patch
---

fix: read and write line breaks in Markdown headings and table cells

A line break in an h3 to h6 heading, or in an h1 or h2 written with `#`, now survives Markdown export and import. So does a line break in a table cell. Headings write `<br>` and table cells write `<br />`.

Markdown `<br>`, `<br/>` and `<br />` used to be dropped, or kept as text, and now read as line breaks.

Paragraphs, headings written with an underline, and a custom `hardBreak` are unchanged.
