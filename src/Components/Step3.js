import React from 'react'

function Step3(props) {
    return (
        <div className="form-group">
        <label>Passowrd</label>
        <input 
        className="form-control"
        id="passowrd"
        name="passowrd"
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
