/* @flow */
import React, {Fragment} from 'react'
import type {Node} from 'react'

type Props = {
  children?: Node,
}

const Layout = ({children}: Props) => (
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
