import React from 'react'
import { useStore } from '../../store/store'
import { Cell } from '../Cell/Cell'
import { Header } from '../Header/Header'
import styles from './Board.module.scss'

export const Board = () => {
  const board = useStore(state => state.field)
  console.log(board)
  return (
    <div className={`${styles.game} bordered-revert`}>
      <Header />
      <div className={`${styles.grid} bordered`}>
        {board.map((row, _) => {
          return row.map((__, index) => {
            return <Cell key={index} />
          })
        })}
      </div>
    </div>
  )
}
