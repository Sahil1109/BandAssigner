import React from 'react'

function Card(props) {
    return (
        <div className="card">
        <img className="card-img-top" alt= "No Image available" src={props.featureImage}/>
        <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">Learn More</a>
        </div>
        </div>
    )
}

export default Card
