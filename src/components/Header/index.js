import * as React from "react"
import { Link } from "gatsby"
import { Nav } from '../Nav/index'

import * as styles from './_header.module.scss'


export const Header = () => {
  let header

  header = (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/" className="logo">logo</Link>
      </h1>
      <Nav />
    </header>
  )

  return header
}
