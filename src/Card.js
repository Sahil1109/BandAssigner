import React from 'react'

function Card() {
    return (
        <div>
        <img alt=" No Image available" height="40px" width="60px"></img>
        <br></br>
        <h3>{this.headline}</h3>
        <br></br>
        <h5>Description</h5>
        <button>Learn More</button>
        </div>
    )
}

export default Card
