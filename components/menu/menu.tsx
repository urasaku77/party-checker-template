import React from 'react'
import Image from 'next/image'
import styles from './Menu.module.css'

type Props = {
  title: string
  image: string
}
export function Menu(props: Props): JSX.Element {
  return (
    <div className={styles.flex}>
      <figure className={styles.image}>
        <Image src={props.image} layout="fill" objectFit="contain" alt="icon1" />
      </figure>
      <h2 className={styles.title}>{props.title}</h2>
      <figure className={styles.image}>
        <Image src={props.image} layout="fill" objectFit="contain" alt="icon2" />
      </figure>
    </div>
  )
}
