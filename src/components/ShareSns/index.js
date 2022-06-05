import * as React from "react"
import * as styles from './_sns.module.scss'

import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share'

const ShareSns = ({ articleUrl, articleTitle }) => (
  <div className={styles.sns__wrap}>
    <div>
      <FacebookShareButton url={articleUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <LineShareButton url={articleUrl}>
        <LineIcon size={32} round />
      </LineShareButton>

      <LinkedinShareButton url={articleUrl}>
        <LinkedinIcon title={articleTitle} size={32} round />
      </LinkedinShareButton>

      <TwitterShareButton title={articleTitle} via="yoshiki__0428" url={articleUrl}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  </div>
)

export default ShareSns
