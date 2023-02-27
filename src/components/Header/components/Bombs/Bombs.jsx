import React from 'react'
import { completeTo3Digits } from '../../../../helpers/completeTo3Digits'
import { useStore } from '../../../../store/store'
import { Digit } from '../../../Digit/Digit'
import styles from './Bombs.module.scss'
export const Bombs = () => {
  const counter = completeTo3Digits(useStore(state => state.bombs)).split('')
  return (
    <div className={styles.bombs}>
      {counter.map((num, index) => (
        <Digit key={index} number={num} />
      ))}
    </div>
  )
}
