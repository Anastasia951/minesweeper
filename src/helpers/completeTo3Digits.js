export function completeTo3Digits(el) {
  el = el.toString()
  if (el.length > 3) return el
  let zeroes = '0'.repeat(3 - el.length)
  return zeroes + el
}