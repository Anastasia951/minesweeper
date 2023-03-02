import React, { useEffect, useRef, useState } from 'react'
import { completeTo3Digits } from '../../../../helpers/completeTo3Digits'
import { useGameState } from '../../../../store/selectors'
import { STATE, useStore } from '../../../../store/store'
import { Digit } from '../../../Digit/Digit'
import styles from './Timer.module.scss'
export const Timer = () => {
  const status = useStore(useGameState)
  const [seconds, setSeconds] = useState('000')
  const timerRef = useRef()
  function clear() {
    clearInterval(timerRef.current)
  }

  useEffect(() => {
    if (status === STATE.NOT_STARTED) {
      setSeconds('000')
      timerRef.current = null
    }
    if (status === STATE.IN_PROGRESS && !timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds(sec => {
          let newValue = (Number(sec) + 1).toString()
          if (newValue.length > 3) clear()
          return completeTo3Digits(newValue)
        })
      }, 1000)
    }

    if (status === STATE.FAILED) {
      clear()
    }

    return clear
  }, [status])

  return (
    <div className={styles.timer}>
      {seconds.split('').map((el, index) => (
        <Digit key={index} number={el} />
      ))}
    </div>
  )
}
