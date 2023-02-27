import React from 'react'
import styles from './Header.module.scss'
export const Header = () => {
  return (
    <header className={`${styles.info} bordered`}>
      <div className={styles.bombs}>
        <div className={`${styles.digit}`}></div>
        <div className={`${styles.digit}`}></div>
        <div className={`${styles.digit} ${styles.digit_0}`}></div>
      </div>
      <button className={`${styles.face} ${styles.face__failed}`} />
      <div className={styles.timer}>
        <div className={`${styles.digit}`}></div>
        <div className={`${styles.digit}`}></div>
        <div className={`${styles.digit} ${styles.digit_0}`}></div>
      </div>
    </header>
  )
}
