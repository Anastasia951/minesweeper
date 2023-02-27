import React from 'react'
import styles from './Digit.module.scss'
export const Digit = ({ number }) => {
  number = number || 0
  return <div className={`${styles.digit} ${styles[`digit_${number}`]}`}></div>
}
