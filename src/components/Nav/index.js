import * as React from "react"
import { Link } from "gatsby"

import * as styles from './_nav.module.scss'

export const Nav = () => {
  let nav

  const navData = [
    {
      link: '/',
      text: 'Home'
    },
    {
      link: '/',
      text: 'About XS',
      subText: 'TM'
    },
    {
      link: '/',
      text: 'Life with XS',
      subText: 'TM'
    },
    {
      link: '/',
      text: 'Products'
    },
    {
      link: '/',
      text: 'News'
    },
    {
      link: '/',
      text: 'Shop'
    }
  ]

  nav = (
    <nav className={styles.nav}>
      <ul>
        {navData.map((ele, index) => {
          return (
            <li key={index}>
              <Link to={ele.link} className={styles.link}>
                {ele.text}
                {ele.subText && <sub>{ele.subText}</sub>}
              </Link>
            </li>
            )
          })
        }
      </ul>
    </nav>
  )

  return nav
}
