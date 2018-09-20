/* @flow */
import React, {Fragment} from 'react'
import styled from 'styled-components'
import type {Node} from 'react'

type Props = {
  children?: Node,
}

const Header = styled.header`
  background: #ccc;
`

const Layout = ({children}: Props) => (
  <Fragment>
    <Header>
      header
    </Header>
    <main>{children}</main>
    <footer>
      footer
    </footer>
  </Fragment>
)

export default Layout
