import React from 'react'
import { useStore } from '../../../../store/store'
import styles from './Face.module.scss'
export const Face = () => {
  const startGame = useStore(state => state.startGame)

  return (
    <button
      onClick={startGame}
      className={`${styles.face} ${styles.face__failed}`}
    />
  )
}
