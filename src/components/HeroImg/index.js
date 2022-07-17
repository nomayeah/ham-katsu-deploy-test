import * as React from "react"

import * as styles from './_heroImg.module.scss'

export const HeroImg = ({data}) => {
  let heroImg
  const img = data.heroImage.childImageSharp.fluid.src
  const title = data.title
  const subTitle = data.subTitle

  heroImg = (
    <div className={styles.heroImg}>
      <h1 className={styles.text}>
        <strong>{title}<span>{subTitle}</span></strong></h1>
      <img src={img} alt="記事イメージ" />
    </div>
  )

  return heroImg
}
