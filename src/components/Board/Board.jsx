import React from 'react'
import {
  useField,
  useGameState,
  useOpenArea,
  useOpenedCells,
  useStartGame,
} from '../../store/selectors'
import { STATE, useStore } from '../../store/store'
import { Cell } from '../Cell/Cell'
import styles from './Board.module.scss'
export const Board = () => {
  const board = useStore(useField)
  const opened = useStore(useOpenedCells)
  const openArea = useStore(useOpenArea)
  const status = useStore(useGameState)
  const startGame = useStore(useStartGame)
  function onClickHandler(e) {
    const { x, y } = e.target.dataset
    if (status === STATE.NOT_STARTED) {
      startGame(y, x)
    }
    openArea(y, x)
  }
  return (
    <div onClick={onClickHandler} className={`${styles.grid} bordered`}>
      {board.map((row, y) => {
        return row.map((__, x) => {
          return (
            <Cell
              key={`${x}:${y}`}
              isOpened={opened[y][x]}
              x={x}
              y={y}
              value={board[y][x]}
            />
          )
        })
      })}
    </div>
  )
}
