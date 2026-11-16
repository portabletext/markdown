import type {TypedObject} from '@portabletext/types'

const cellParagraphs = new WeakSet<TypedObject>()

export function markCellParagraph(node: TypedObject): void {
  cellParagraphs.add(node)
}

export function consumeCellParagraph(node: TypedObject): boolean {
  const marked = cellParagraphs.has(node)
  cellParagraphs.delete(node)
  return marked
}

export function tagHardBreak(cell: boolean): string {
  return cell ? '<br />' : '<br>'
}
