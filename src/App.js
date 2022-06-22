import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./Navbar"
import "./App.css"
import CardComponent from "./CardComponent"
import data from "./data"
import DarkMode from "./DarkMode"

export default function App() {
  const cards = data.map((item) => {
    return (
      <div className="main--app">
        <CardComponent key={item.id} {...item} />
      </div>
    )
  })
  return (
    <div>
      <DarkMode className="light" />
      <Navbar />
      <section classname="cards--list">{cards}</section>
    </div>
  )
}
