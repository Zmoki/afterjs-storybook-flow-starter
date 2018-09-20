import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
  static async getInitialProps({req, res, match, history, location, ...ctx}) {
    return {whatever: 'stuff'}
  }

  render() {
    return (
      <main>
        <h1>Home</h1>
        <Link to='/about'>About -></Link>
      </main>
    )
  }
}

export default Home
