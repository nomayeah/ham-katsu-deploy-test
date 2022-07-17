import React from 'react';
import { Link } from "gatsby"

import * as styles from './_breadcrumb.module.scss'

export const BreadCrumb = ({ title }) => {
  let bread_crumb

  bread_crumb = (
    <ol className={styles.breadCrumb}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <span>{title}</span>
      </li>
    </ol>
  )

  return bread_crumb
}