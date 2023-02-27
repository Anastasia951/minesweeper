import React from 'react'
import { Digit } from '../../../Digit/Digit'
import styles from './Timer.module.scss'
export const Timer = () => {
  return (
    <div className={styles.timer}>
      <Digit number={3} />
      <Digit />
      <Digit />
    </div>
  )
}
