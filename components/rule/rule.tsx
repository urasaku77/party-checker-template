import React from 'react'
import styles from './Rule.module.css'
import { Menu } from '../menu/menu'

export function Rule() {
  return (
    <div className={styles.grid}>
      <a className={styles.card}>
        <Menu title="共通ルール" image="/nc139223.png" />
        <p>
          <ul>
            <li>
              <h3>TOD禁止（1時間5戦のみのため）</h3>
            </li>
            <li>シングル63</li>
            <li>同じポケモン&もちもの禁止</li>
            <li>600族ポケモンは制限なし</li>
          </ul>
          <h2>禁止ポケモン</h2>
          <ul>
            <li>メタモン（かわりもの/じゅうなん共に）</li>
            <li>幻ポケモン</li>
          </ul>
        </p>
      </a>

      <a className={styles.card}>
        <Menu title="選択ルール" image="/nc139228.png" />
        <p>
          <h3>以下のどちらかを選択</h3>
          <h2>ルール①</h2>
          <ul>
            <li>禁止級伝説1体のみ使用可能</li>
            <li>準伝説（パラドックス、四災、ウーラオス、ガチグマ(アカツキ)、オーガポン含む）使用不可</li>
          </ul>
          <h2>ルール②</h2>
          <ul>
            <li>準伝説（同上）2体まで使用可能</li>
            <li>禁止級伝説使用不可</li>
          </ul>
        </p>
      </a>
    </div>
  )
}
