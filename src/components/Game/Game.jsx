import React from 'react'
import { Board } from '../Board/Board'

import { Header } from '../Header/Header'
import styles from './Game.module.scss'

export const Game = () => {
  return (
    <div className={`${styles.game} bordered-revert`}>
      <Header />
      <Board />
    </div>
  )
}
