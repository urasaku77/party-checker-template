import React from 'react'
//import Image from 'next/image'
import styles from './Title.module.css'

export function Title(): JSX.Element {
  return (
    <div className={styles.flex}>
      {/* <figure className={styles.image}>
        <Image src="/header.png" layout="fill" objectFit="contain" />
      </figure> */}
      <div className={styles.right}>
        <p className={styles.title}>第◯回〇〇杯</p>
        <p className={styles.text}>日時：◯/◯(◯) ◯:◯~◯:◯</p>
      </div>
    </div>
  )
}
