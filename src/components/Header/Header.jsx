import React from 'react'
import { Bombs } from './components/Bombs/Bombs'
import { Face } from './components/Face/Face'
import { Timer } from './components/Timer/Timer'
import styles from './Header.module.scss'
export const Header = () => {
  return (
    <header className={`${styles.info} bordered`}>
      <Bombs />
      <Face />
      <Timer />
    </header>
  )
}
