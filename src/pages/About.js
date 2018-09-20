import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'

class About extends Component {
  render() {
    return (
      <Layout>
        <h1>About</h1>
        <Link to='/'>Go to Home</Link>
      </Layout>
    )
  }
}

export default About
