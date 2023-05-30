import styles from './Menu.module.css'
import Image from 'next/image'
import React from 'react'

type Props = {
  title: string
  image: string
}
export function Menu(props: Props) {
  return (
    <div className={styles.flex}>
      <figure className={styles.image}>
        <Image src={props.image} layout="fill" objectFit="contain" />
      </figure>
      <h2 className={styles.title}>{props.title}</h2>
      <figure className={styles.image}>
        <Image src={props.image} layout="fill" objectFit="contain" />
      </figure>
    </div>
  )
}
