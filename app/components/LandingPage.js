import React, { Component } from 'react'
import history from '../history'

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleLink = this.handleLink.bind(this)
  }

  handleLink = (e, type) => {
    history.push(`/${type}`)
  }

  render() {
    return (
      <div>
        <h1>HELLO WORLD</h1>
      </div>
    )
  }
}

export default LandingPage
