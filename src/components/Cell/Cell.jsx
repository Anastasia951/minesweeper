import React from 'react'
import styles from './Cell.module.scss'
export const Cell = ({ isOpened = false, value, x, y }) => {
  let classname = ''
  if (isOpened) {
    switch (value) {
      case -1: {
        classname = 'bomb-opened'
        break
      }
      case 'bomb-incorrect': {
        classname = 'bomb-incorrect'
        break
      }
      case 'bomb-correct': {
        classname = 'bomb-correct'
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
    switch (value) {
      case 'flag': {
        classname = 'flag'
        break
      }
      case 'question': {
        classname = 'question'
        break
      }
      default: {
        classname = 'closed'
      }
    }
  }
  return (
    <button
      name={`cell-${x}:${y}`}
      data-x={x}
      data-y={y}
      className={`${styles.cell} ${styles[classname]}`}
      alt={`cell-${classname}`}></button>
  )
}
