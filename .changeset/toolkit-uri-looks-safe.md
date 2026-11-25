---
'@portabletext/markdown': patch
---

fix: use `uriLooksSafe` from `@portabletext/toolkit`

Links are checked for unsafe protocols with the toolkit's shared helper instead of a local copy. The same links render as before.
