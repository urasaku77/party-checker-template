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
        <p className={styles.title}>第9回パパママ杯</p>
        <p className={styles.text}>日時：11/25(土) 23:00~23:59</p>
      </div>
    </div>
  )
}
