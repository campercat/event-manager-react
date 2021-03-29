import React from "react"

const EventTile = props => {
  let eventBG
  if(props.eventType === "personal") {
    eventBG = "green-bg"
  } else if(props.eventType === "business-casual") {
    eventBG = "pink-bg"
  } else {
    eventBG = "blue-bg"
  }

  return(
    <div className={eventBG}>
      <h3>{props.title}</h3>
      <p>{props.timePeriod}</p>
      <p>{props.description}</p>
      <button type="button">Done</button>
    </div>
  )
}

export default EventTile