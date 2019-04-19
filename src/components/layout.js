import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;
    let footer;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(2/3),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: rhythm(1/3),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#C30042`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );

      footer = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: rhythm(1/3),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#C30042`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
/*


        <footer>
          © {new Date().getFullYear()},
          {` `}
          <a href="https://kevinmocorro.com">Kevin Mocorro</a>
        </footer>


*/
