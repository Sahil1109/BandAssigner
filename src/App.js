import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    let bpm= 100;
    let playing=false;
    return (
      <div className="App">
        <div className="slider">
        <div>{bpm} BPM</div>
        <input type="range" min="60" max="240" value={bpm}></input>
        </div>
        <button>{playing? 'Start':'Stop'} </button>
      </div>
    )
  }
}

export default App
