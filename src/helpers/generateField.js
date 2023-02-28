export const genereateField = (field, bombs, startX = 0, startY = 0) => {
  let currentBombs = 0
  while (currentBombs < bombs) {
    let rndX = Math.floor(Math.random() * field[0].length)
    let rndY = Math.floor(Math.random() * field.length)

    if (startX === rndX && startY === rndY) continue
    if (field[rndX][rndY] === null) {
      field[rndX][rndY] = -1
      currentBombs++
    }
  }
  countBombs(field)

  return field
}


function countBombs(field) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === -1) continue
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