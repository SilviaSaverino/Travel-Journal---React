import React from "react"

export default function Card(props){
    return (
        <div className="card">
           <img className="card-img"src={props.imageUrl} alt={props.alt}></img>
           <div className="card-content">
            <div className="card-location-info">
                <img className="card-icon"src="../public/images/icon.png" alt="location icon"></img>
                <p className="card-location-name">{props.location}</p>
                <a className="google-location" href={props.googleMapsUrl}>View on G.Maps</a> 
            </div>
            <div className="card-info">
                <h3>{props.title}</h3>
                <span><strong>{props.startDate}</strong></span>
                <span>-<strong>{props.endDate}</strong></span>
                <p>{props.description}</p>
            </div>
           </div>
        </div>
    )
}