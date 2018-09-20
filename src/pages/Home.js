import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'

class Home extends Component {
  static async getInitialProps({req, res, match, history, location, ...ctx}) {
    return {whatever: 'stuff'}
  }

  render() {
    return (
      <Layout>
        <h1>Home</h1>
        <Link to='/about'>About -></Link>
      </Layout>
    )
  }
}

export default Home
