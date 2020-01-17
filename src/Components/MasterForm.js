import React, { Component } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

class MasterForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             currentStep:1,
             email: '',
             username: '',
             password:'',
        }
    }
    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
      }
    handleChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }

   handleSubmit= event=>{
       event.preventDefault()
       const {email, username, password}=this.state
        alert(`Your registrtion details:\n
        Email: ${email}\n
        Username: ${username} \n
        Password: ${password}`)
   }
   previousButton(){
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep= this.state.currentStep;
    if(currentStep<3){
        return (
            <button
            className="btn btn-primary"
            type="button"
            onClick={this._next}>Next
            </button>
        )
    }
    return null;
  }

    render() {
        return (
            <React.Fragment>
            <h1>A wizard form</h1>
            <p>Step {this.state.currentStep} </p>
            <form onSubmit={this.handleSubmit}>
            <Step1 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                email={this.state.email} />
            <Step2 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                username={this.state.username} />
            <Step3
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                password={this.state.password} />
            {this.previousButton()}
            {this.nextButton()}
            </form></React.Fragment>
        )
    }
}

export default MasterForm
