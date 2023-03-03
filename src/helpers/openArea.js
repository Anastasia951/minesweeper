export const openArea = (bombs, field, row, column, oldValues) => {
  let counter = 0
  row = +row
  column = +column
  function dfs(row = 0, column = 0) {
    if (row >= 0 && row < field[0].length && column >= 0 && column < field.length) {
      if (field[row][column]) return
      if (bombs[row][column] === -1 || bombs[row][column] === 'flag' || bombs[row][column] === 'question') return
      field[row][column] = true
      counter++
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

  if (bombs[row][column] === 'flag' || bombs[row][column] === 'question') {
    return { field, isGameOver: false, counter: 0 }
  } else if (bombs[row][column] >= 0) {
    dfs(row, column)
    return { field, isGameOver: false, counter }
  } else {
    bombs[row][column] = 'bomb-correct'
    for (let i = 0; i < field.length; i++) {
      for (let j = 0; j < field[i].length; j++) {
        if (bombs[i][j] === -1) {
          field[i][j] = true
        }
        if (bombs[i][j] === 'flag' || bombs[i][j] === 'question') {
          if (oldValues[i][j] !== -1) {
            bombs[i][j] = 'bomb-incorrect'
            field[i][j] = true
          }
        }
      }
    }

    field[row][column] = true

    return { field, isGameOver: true, counter }
  }

}