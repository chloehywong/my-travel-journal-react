import React from "react"

export default function Trips(props) {
    return (
        <div className="trip">
            <img src={props.imageUrl} className="trip--img" alt=""/>
            <div className="trip--info">
                <div className="info--line1">
                    <img src="../images/pin.png" className="trip--pin" alt=""/>
                    <h5 className="trip--location">{props.location}</h5>
                    <a href={props.googleMapsUrl} className="trip--link">View on Google Maps</a>
                </div>
                <h2 className="trip--title">{props.title}</h2>
                <h4 className="trip--date">{props.startDate} - {props.endDate}</h4>
                <p className="trip--content">{props.description}</p>
            </div>
        </div>
    )
}