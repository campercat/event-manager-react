import React from 'react'

import EventTile from './EventTile'
import DogImage from './DogImage'
import Button from './Button'

const EventManagementApp = props => {
  const events = [
    { title: "Brunch with Werewolves", timePeriod: "10:00am - 12:00pm", description: null, eventType: "personal"},
    { title: "Strategy Meeting with the Finfolk on New Import Tariffs", timePeriod: "1:00pm - 2:00pm", description: "The World Wizardry Workgroup hit us hard on these tariffs.", eventType: "business" },
    { title: "Award Ceremony for Amrita the Banshee", timePeriod: "2:00pm - 3:00pm", description: "Bring earplugs, have fun.", eventType: "business-casual" },
    { title: "Djinn Tech Support with the Qamar and Caliope", timePeriod: "4:00pm - 5:00pm", description: "Computers are down, let them work their magic.", eventType: "business" }
  ]

  const eventTiles = events.map(event => {
    return(
      <EventTile
        title={event.title}
        timePeriod={event.timePeriod}
        description={event.description}
        eventType={event.eventType}
      />
    )
  })

  return(
    <div className="event-management-app">
      <Button />
      <h1>Now viewing your upcoming events</h1>
      {eventTiles}
      <DogImage />
      <p>"The day may be ruff, but we are here for you in spirit!"</p>
    </div>
  )
}

export default EventManagementApp