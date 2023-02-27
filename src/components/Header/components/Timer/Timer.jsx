import React, { useEffect, useRef, useState } from 'react'
import { completeTo3Digits } from '../../../../helpers/completeTo3Digits'
import { Digit } from '../../../Digit/Digit'
import styles from './Timer.module.scss'
export const Timer = () => {
  const [seconds, setSeconds] = useState('000')
  const timerRef = useRef()
  function clear() {
    clearInterval(timerRef.current)
  }
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds(sec => {
        let newValue = (Number(sec) + 1).toString()
        if (newValue.length > 3) clear()
        return completeTo3Digits(newValue)
      })
    }, 1000)

    return clear
  }, [])

  return (
    <div className={styles.timer}>
      {seconds.split('').map((el, index) => (
        <Digit key={index} number={el} />
      ))}
    </div>
  )
}
