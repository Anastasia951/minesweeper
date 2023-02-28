import React from 'react'
import { useField, useOpenedCells } from '../../store/selectors'
import { useStore } from '../../store/store'
import { Cell } from '../Cell/Cell'
import styles from './Board.module.scss'
export const Board = () => {
  const board = useStore(useField)
  const opened = useStore(useOpenedCells)

  return (
    <div className={`${styles.grid} bordered`}>
      {board.map((row, y) => {
        return row.map((__, x) => {
          return (
            <Cell
              key={`${x}:${y}`}
              isOpened={opened[x][y]}
              x={x}
              y={y}
              value={board[x][y]}
            />
          )
        })
      })}
    </div>
  )
}
