import React from 'react'
import { Bombs } from './components/Bombs/Bombs'
import { Timer } from './components/Timer/Timer'
import styles from './Header.module.scss'
export const Header = () => {
  return (
    <header className={`${styles.info} bordered`}>
      <Bombs />
      <button className={`${styles.face} ${styles.face__failed}`} />
      <Timer />
    </header>
  )
}
