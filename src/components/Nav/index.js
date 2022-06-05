import * as React from "react"
import { Link } from "gatsby"

import * as styles from './_nav.module.scss'

const Nav = () => {
  let nav

  nav = (
    <>
      <nav>
        <li>
          <Link to="/">test1</Link>
        </li>
        <li className={styles.current}>
          <Link to="/">test2</Link>
        </li>
      </nav>
    </>
  )

  return nav
}

export default Nav
