import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'

class Home extends Component {
  /* eslint-disable no-unused-vars */
  static async getInitialProps({req, res, match, history, location, ...ctx}) {

    return {whatever: 'stuff'}
  }
  /* eslint-enable no-console */

  render() {
    return (
      <Layout>
        <h1>Home</h1>
        <Link to='/about'>Got to About</Link>
      </Layout>
    )
  }
}

export default Home
