import React from "react"

export default function Card(props){
    let badgeContent
    if (props.visited){
        badgeContent="VISITED"
    } else {
        badgeContent="NOT VISITED YET"
    }

    return (
        <div className="card">
           <div className="card-badge">{badgeContent}</div>
           <img className="card-img"src={props.imageUrl} alt={props.alt}></img>
           <div className="card-content">
            <div className="card-location-info">
                <img className="card-icon"src="../public/images/icon.png" alt="location icon"></img>
                <p className="card-location-name">{props.location}</p>
                <a className="google-location" href={props.googleMapsUrl}>View on G.Maps</a> 
            </div>
            <div className="card-info">
                <h3>{props.title}</h3>
                {props.visited && <span><strong>{props.startDate}</strong></span>}
                {props.visited && <span>-<strong>{props.endDate}</strong></span>}
                <p>{props.description}</p>
            </div>
           </div>
        </div>
    )
}