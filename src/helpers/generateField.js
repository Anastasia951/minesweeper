export const genereateField = (field, bombs, row, column) => {
  if (field[row][column] === 'flag' || field[row][column] === 'question') return field
  let currentBombs = 0
  field[row][column] = -10

  while (currentBombs < bombs) {
    let randomRow = Math.floor(Math.random() * field.length)
    let randomCol = Math.floor(Math.random() * field[0].length)

    if (Math.abs(randomRow - row) <= 1 && Math.abs(column - randomCol) <= 1) {
      continue
    }
    if (field[randomRow][randomCol] === null) {
      field[randomRow][randomCol] = -1
      currentBombs++
    }
  }

  countBombs(field)
  field[row][column] = 0
  return field
}


function countBombs(field) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === -1 || field[i][j] === -10) continue
      let counter = 0

      if (j > 0) {
        if (field[i][j - 1] === -1) {
          counter++
        }
      }
      if (j < field[i].length) {
        if (field[i][j + 1] === -1) {
          counter++
        }
      }
      if (i > 0) {
        if (field[i - 1][j] === -1) {
          counter++
        }
        if (j > 0) {
          if (field[i - 1][j - 1] === -1) {
            counter++
          }
        }
        if (j < field[i].length - 1) {
          if (field[i - 1][j + 1] === -1) {
            counter++
          }
        }
      }

      if (i < field.length - 1) {
        if (field[i + 1][j] === -1) {
          counter++
        }
        if (j > 0) {
          if (field[i + 1][j - 1] === -1) {
            counter++
          }
        }
        if (j < field[i].length - 1) {
          if (field[i + 1][j + 1] === -1) {
            counter++
          }
        }
      }
      field[i][j] = counter
    }
  }
}