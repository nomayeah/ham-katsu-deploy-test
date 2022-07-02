import * as React from "react"
import { Header } from "./Header/index"
import ShareSns from "./ShareSns/index"
import Tag from './Tag/index'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <ShareSns articleUrl="https://stalwart-lamington-4382c1.netlify.app/" articleTitle="test1" />
      <Tag />

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
