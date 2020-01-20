import React, { Component } from 'react'

class Dropdown extends Component {
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
                <option value="N/A">Day(1-5)</option>
                <option value="Day 1">Day 1</option>
                <option value="Day 2">Day 2</option>
                <option value="Day 3">Day 3</option>
                <option value="Day 4">Day 4</option>
                <option value="Day 5">Day 5</option>
                </select>
            </div>
            <div>{(this.state.selectValue==="N/A") ? alert('Cant select this option'): `Selected day is : ${this.state.selectValue}`}</div>
            </div>
        )
    }
}
export default Dropdown
