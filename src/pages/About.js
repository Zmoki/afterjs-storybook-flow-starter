import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <main>
        <h1>About</h1>
        <Link to='/'>Home -></Link>
      </main>
    )
  }
}

export default About
