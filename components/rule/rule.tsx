import React from 'react'
import styles from './Rule.module.css'
import { Menu } from '../menu/menu'

export function Rule(): JSX.Element {
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
            <li>
              <a
                href="https://yakkun.com/sv/zukan/search/?search=1&r1=0&r2=0&r3=0&stats_min_7=600&stats_max_7=600"
                target="_blank"
                rel="noopener noreferrer"
              >
                600族ポケモン
              </a>
              は制限なし
            </li>
          </ul>
          <h2>禁止ポケモン</h2>
          <ul>
            <li>
              <a href="https://yakkun.com/sv/zukan/n132" target="_blank" rel="noopener noreferrer">
                メタモン（かわりもの/じゅうなん共に）
              </a>
            </li>
            <li>
              <a
                href="https://yakkun.com/sv/zukan/search/?search=1&r0=0&r1=0&r2=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                幻ポケモン
              </a>
            </li>
          </ul>
        </p>
      </a>

      <a className={styles.card}>
        <Menu title="選択ルール" image="/nc139228.png" />
        <p>
          <h3>以下のどちらかを選択</h3>
          <h2>ルール①</h2>
          <ul>
            <li>
              <a
                href="https://yakkun.com/sv/zukan/search/?search=1&r0=0&r1=0&r3=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                禁止級伝説
              </a>
              1体のみ使用可能
            </li>
            <li>
              <a
                href="https://yakkun.com/sv/zukan/search/?search=1&r0=0&r2=0&r3=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                準伝説（パラドックス、四災、ウーラオス、ともっこ、オーガポン含む）
              </a>
              使用不可
            </li>
          </ul>
          <h2>ルール②</h2>
          <ul>
            <li>
              <a
                href="https://yakkun.com/sv/zukan/search/?search=1&r0=0&r2=0&r3=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                準伝説（パラドックス、四災、ウーラオス、ともっこ、オーガポン含む）
              </a>
              2体まで使用可能
            </li>
            <li>
              <a
                href="https://yakkun.com/sv/zukan/search/?search=1&r0=0&r1=0&r3=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                禁止級伝説
              </a>
              使用不可
            </li>
          </ul>
        </p>
      </a>
    </div>
  )
}
