import React from 'react'
import { useGameState, useRestartGame } from '../../../../store/selectors'
import { useStore } from '../../../../store/store'
import styles from './Face.module.scss'
export const Face = () => {
  const status = useStore(useGameState)
  const restart = useStore(useRestartGame)
  return (
    <button
      onClick={restart}
      className={`${styles.face} ${styles[`face__${status}`]}`}
    />
  )
}
