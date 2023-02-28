import React from 'react'
import { useStore } from '../../store/store'
import { Bombs } from './components/Bombs/Bombs'
import { Timer } from './components/Timer/Timer'
import styles from './Header.module.scss'
export const Header = () => {
  const startGame = useStore(state => state.startGame)
  return (
    <header className={`${styles.info} bordered`}>
      <Bombs />
      <button
        onClick={startGame}
        className={`${styles.face} ${styles.face__failed}`}
      />
      <Timer />
    </header>
  )
}
