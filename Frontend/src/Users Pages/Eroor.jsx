import React from 'react'
import Footer from '../Components/Footer'
import Navigation_Bar from '../Components/Navigation_Bar'

export default function Eroor() {
  return (
    <div>
      <Navigation_Bar name="Dashboard"/>
      <h1 style={{
        textAlign: "center",
        marginTop: "10vh",
        fontSize: "10rem",
        color: "#000"
      }}>
        404
      </h1>
      <Footer/>
    </div>

  )
}
