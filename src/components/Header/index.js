import * as React from "react"
import { Link } from "gatsby"
import Nav from '../Nav/index'

import * as styles from './_header.module.scss'


const Header = () => {
  let header

  header = (
    <>
      <h1 className={styles.current}>
        <Link to="/" className="logo">test24</Link>
      </h1>
      <Nav />
    </>
  )

  return header
}

export default Header
