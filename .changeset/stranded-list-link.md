---
'@portabletext/markdown': patch
---

fix: keep a link at the start of a list paragraph after a code block

Fix a link at the start of a paragraph after a code block, heading or other block in a list item being dropped when the schema has no list types. Text after it, in the item or after the list, no longer carries a mark with no link. A paragraph there now always gives a block, as it does when the schema has list types, so a paragraph that is only an image keeps the image instead of losing it.
