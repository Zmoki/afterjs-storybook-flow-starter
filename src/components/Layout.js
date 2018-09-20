import React, {Fragment} from 'react'

const Layout = ({children}) => (
  <Fragment>
    <header>
      header
    </header>
    <main>{children}</main>
    <footer>
      footer
    </footer>
  </Fragment>
)

export default Layout
