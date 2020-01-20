import React, { Component } from 'react'
import Dropdown from './Components/Dropdown'
import Band from './Components/Band'

class App extends Component {
  render() {
    return (
      <div>
        <Dropdown/>
        <Band/>
      </div>
    )
  }
}

export default App
