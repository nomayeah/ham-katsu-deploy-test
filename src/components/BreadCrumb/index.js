import React from 'react';
import { Link } from "gatsby"

export const BreadCrumb = ({ parent, title, location }) => {
  let List = [{ location: "/", title: "ホーム" }]
  if (parent === "blogs") {
    List = [...List, { location: "/blogs/", title: "記事一覧" }]
  }

  let bread_crumb

  bread_crumb = (
    <ol>
      {List.map(item => {
        return (
          <li key={item.location}>
            <Link to={item.location}>{item.title}</Link>
          </li>
        )
      })}
      <li key={location.pathname}>{title}</li>
    </ol>
  )

  return bread_crumb
}