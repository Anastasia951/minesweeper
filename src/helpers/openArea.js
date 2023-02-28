export const openArea = (field, startX, startY) => {
  field[startX][startY] = true
  return field
}