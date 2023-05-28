import styles from './Title.module.css'
import Image from 'next/image'

export function Title() {
  return (
    <div className={styles.flex}>
    <figure className={styles.image}><Image src='/IMG_0004.JPG' layout="fill" objectFit="contain"/></figure>
    <div className={styles.right}>
      <p className={styles.title}>第9回パパママ杯</p>
      <p className={styles.title}>~パルデア篇~</p>
      <p className={styles.text}>日時：5/20(土) 23:00~23:59</p>
    </div>
  </div>
  )
}
