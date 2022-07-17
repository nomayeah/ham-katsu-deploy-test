import * as React from "react"
import { Link } from "gatsby"
import { Nav } from '../Nav/index'

import * as styles from './_header.module.scss'

import logoImg from '../../images/header1_logo2_1.svg'

export const Header = () => {
  let header

  header = (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className="logo">
          <img src={logoImg} alt="logo画像" />
        </Link>
      </div>
      <Nav />
    </header>
  )

  return header
}
