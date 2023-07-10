import React from "react"
import Navbar from "./components/Navbar"
import Trips from "./components/Trips"
import data from "./data"

export default function App() {
    const tripElements = data.map(item => {
        return (
            <Trips
                key={item.id}
                imageUrl={item.imageUrl}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                title={item.title}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                />
        )
    })
    return (
        <div>
            <Navbar />
            {tripElements}
        </div>
    )
}