import React from 'react'

function Step3(props) {
    if(props.currentStep!==3){
        return null
    }
    return (
        <div className="form-group">
        <label>Password</label>
        <input 
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleChange}
        >
        </input>
        <hr></hr>
        <button className="btn btn-primary">Login</button>
        </div>
    )
}

export default Step3
