import './App.css'

import React from 'react'
import MasterForm from './Components/MasterForm'

function App() {
  return (
    <div>
    <MasterForm/>
    </div>
  )
}

export default App










































{
/* import click1 from './click1.wav'
import click2 from './click2.wav'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       bpm:100,
       playing: false,
       beatsPerMeasure:3,
       count:0,

    }
    //
    this.click1= new Audio(click1);
    this.click2=new Audio(click2);
  }
  handleBpmChange = event =>{
    const bpm = event.target.value;

    if (this.state.playing) {
      // Stop the old timer and start a new one
      clearInterval(this.timer);

      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
  
      // Set the new BPM, and reset the beat counter
      this.setState({
        count: 0,
        bpm
      });
    }
     else {
      // Otherwise just update the BPM
      this.setState({ bpm });
    }
  }
  playClick = () => {
    const { count, beatsPerMeasure } = this.state;
  
    // The first beat will have a different sound than the others
    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }
  
    // Keep track of which beat we're on
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };

  startStop=()=>{
    if (this.state.playing) {
      // Stop the timer
      clearInterval(this.timer);
      this.setState({
        playing: false
      });
    } else {
      // Start a timer with the current BPM
      this.timer = setInterval(
        this.playClick,
        (60 / this.state.bpm) * 1000
      );
      this.setState(
        {
          count: 0,
          playing: true
          // Play a click "immediately" (after setState finishes)
        },
        this.playClick
      );
    }
  };
  
  render() {
    const {bpm, playing}=this.state
    return (
      <div className="App">
        <div className="slider">
        <div>{bpm} BPM</div>
        <input 
        type="range" 
        min="60" 
        max="240" 
        value={bpm} 
        onChange={this.handleBpmChange}>
        </input>
        </div>
        <button onClick={this.startStop}>{playing? 'Stop':'Start'} </button>
      </div>
    )
  }
}  */}


