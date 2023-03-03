import React from 'react'
import {
  useGameState,
  useIsMouseOver,
  useRestartGame,
} from '../../../../store/selectors'
import { useStore } from '../../../../store/store'
import styles from './Face.module.scss'
export const Face = () => {
  const status = useStore(useGameState)
  const restart = useStore(useRestartGame)
  const isMouseOver = useStore(useIsMouseOver)
  return (
    <button
      name='face'
      onClick={restart}
      className={`${styles.face} ${styles[`face__${status}`]} ${
        isMouseOver ? styles['face__worried'] : ''
      }`}
    />
  )
}
