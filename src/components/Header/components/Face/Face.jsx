import React from 'react'
import { useGameState, useStartGame } from '../../../../store/selectors'
import { useStore } from '../../../../store/store'
import styles from './Face.module.scss'
export const Face = () => {
  const startGame = useStore(useStartGame)
  const status = useStore(useGameState)

  return (
    <button
      onClick={startGame}
      className={`${styles.face} ${styles[`face__${status}`]}`}
    />
  )
}
