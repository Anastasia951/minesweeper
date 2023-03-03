import React from 'react'
import {
  useBombsCount,
  useDecreaseBombs,
  useField,
  useGameState,
  useIncreaseBombs,
  useSetIsMouseOver,
  useMarkField,
  useOldValue,
  useOpenArea,
  useOpenedCells,
  useStartGame,
} from '../../store/selectors'
import { STATE, useStore } from '../../store/store'
import { Cell } from '../Cell/Cell'
import styles from './Board.module.scss'
export const Board = () => {
  const bombs = useStore(useBombsCount)
  const board = useStore(useField)
  const opened = useStore(useOpenedCells)
  const openArea = useStore(useOpenArea)
  const status = useStore(useGameState)
  const startGame = useStore(useStartGame)
  const markField = useStore(useMarkField)
  const increaseBombs = useStore(useIncreaseBombs)
  const decreaseBombs = useStore(useDecreaseBombs)
  const oldValue = useStore(useOldValue)
  const setMouseOver = useStore(useSetIsMouseOver)

  function onClickHandler(e) {
    if (status === STATE.WON || status === STATE.FAILED) return
    const { x, y } = e.target.dataset
    if (x && y) {
      if (status === STATE.NOT_STARTED) {
        startGame(y, x)
      }
      openArea(y, x)
    }
  }

  function onContextMenuHandler(e) {
    e.preventDefault()
    if (status === STATE.WON || status === STATE.FAILED) return

    const { x, y } = e.target.dataset
    if (x && y) {
      if (opened[y][x]) return
      if (bombs <= 0) return
      switch (board[y][x]) {
        case 'flag': {
          markField(y, x, 'question')
          increaseBombs()
          break
        }
        case 'question': {
          markField(y, x, oldValue[y][x])
          break
        }
        default: {
          markField(y, x, 'flag')
          decreaseBombs()
          break
        }
      }
    }
  }

  return (
    <div
      onMouseDown={setMouseOver}
      onMouseUp={setMouseOver}
      onContextMenu={onContextMenuHandler}
      onClick={onClickHandler}
      className={`${styles.grid} bordered`}>
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
