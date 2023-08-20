import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card'
function Landing() {
  return (
    <>
      <Navbar />
      <div>
        <Navbar />
        <ul className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </>

  )

}

export default Landing