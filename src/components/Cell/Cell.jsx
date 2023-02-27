import React from 'react'
import styles from './Cell.module.scss'
export const Cell = ({ isOpened = false, value }) => {
  let classname = ''
  if (isOpened) {
    switch (value) {
      case -1: {
        classname = 'bomb-opened'
        break
      }
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8: {
        classname = `value-${value}`
        break
      }
      default: {
        classname = 'empty'
      }
    }
  } else {
    classname = 'closed'
  }
  return (
    <button
      className={`${styles.cell} ${styles[classname]}`}
      alt={`cell-${classname}`}></button>
  )
}
