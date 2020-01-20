import React, { Component } from 'react'

class Band extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectValue: " "
        }
    }
    
    handleChange=(event)=>{
        this.setState({
            selectValue: event.target.value,
        })
    }
    
    render() {
        return (
            <div>
             <div>
                <select value={this.state.selectValue}
                onChange={this.handleChange}>
                <option value="N/A">Select band</option>
                <option value="DJ Manu">DJ Manu</option>
                <option value="DJ Sanj">DJ Sanj</option>
                <option value="Nucleya">Nucleya</option>
                <option value="Sunburn">Sunburn</option>
                <option value="Dhol party">Dhol party</option>
                </select>
            </div>
            <div>{(this.state.selectValue==="N/A") ? alert('Cant select this option'): `Selected Band is : ${this.state.selectValue}`}</div>
            </div>
        )
    }
}
export default Band
