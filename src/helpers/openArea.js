export const openArea = (bombs, field, row, column) => {
  row = +row
  column = +column
  function dfs(row = 0, column = 0) {
    if (row >= 0 && row < field[0].length && column >= 0 && column < field.length) {
      if (field[row][column]) return
      field[row][column] = true
      if (bombs[row][column] === 0) {
        dfs(row - 1, column - 1)
        dfs(row - 1, column)
        dfs(row - 1, column + 1)
        dfs(row, column - 1)
        dfs(row, column + 1)
        dfs(row + 1, column - 1)
        dfs(row + 1, column)
        dfs(row + 1, column + 1)
      }
    }
  }

  if (bombs[row][column] >= 0) {
    dfs(row, column)
    return { field, isGameOver: false }
  } else {
    for (let i = 0; i < field.length; i++) {
      for (let j = 0; j < field[i].length; j++) {
        if (bombs[i][j] === -1) {
          field[i][j] = true
        }
      }
    }

    field[row][column] = true

    return { field, isGameOver: true }
  }

}