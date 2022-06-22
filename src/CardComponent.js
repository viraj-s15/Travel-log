import React, { useState } from "react"
import "./CardComponent.css"

function MdLocationOn(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

export default function CardComponent(props) {
  return (
    <div className="card--container">
      <img src={props.image} className="card--image"></img>
      <div className="card--secondary">
        <div className="flex--column--container">
          {MdLocationOn()}
          <h2 className="card--location">{props.location}</h2>
          <a href={props.mapsLink} className="maps--link" target="_blank">
            View on google maps
          </a>
        </div>
        <h1 className="card--landmark">{props.landmark}</h1>
        <h3 className="card--dates">{props.dates}</h3>
        <p className="card--text">{props.text}</p>
      </div>
    </div>
  )
}
