import * as React from "react"
import { Header } from "./Header/index"
import { BreadCrumb } from "./BreadCrumb/index"
import ShareSns from "./ShareSns/index"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <BreadCrumb
        location={location}
        title={children[0].props.title}
      />

      <main>{children}</main>
      <ShareSns articleUrl="https://stalwart-lamington-4382c1.netlify.app/" articleTitle="test1" />

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
