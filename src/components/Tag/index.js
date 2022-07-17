import * as React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

import * as styles from './_tag.module.scss'

export const Tag = ({pathname, tags}) => {
  let tag

  tag = (
    <>
      {pathname !== '/' && 
        <div className={styles.current} >
          {tags && tags.length > 0 && tags.map(tag => {
            return (
              <Link to={`/magazine/tags/${kebabCase(tag)}/`} key={tag}>{tag}</Link>
            )
          })}
        </div>
      }
    </>
  )

  return tag
}
