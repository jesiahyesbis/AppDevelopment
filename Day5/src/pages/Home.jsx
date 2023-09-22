import React from 'react'
import Navbar from './Navbar'
import '../assets/css/Home.css'
function Home() {
  return (
      <>
           <div className="pinkbc1">
      <Navbar/>
    
    <div className="pinkcard">
  <div className="pinkcontent">
    <div className="pinkfront">
      Welcome To MERCADO !
    </div>
    <div className="pinkback">
            <div className="pinkcon1">We are Determined </div>
            <div className="pinkcon2">For your Better Life.</div>
            <div className="pinkcon3">You can get the care</div>
            <div className="pinkcon4">You need 24/7 at MERCADO.</div>
      
    </div>
  </div>
</div>

<div class="container">
    <div class="card">
      <div class="front"></div>
      <div class="back">
        <h1>WELCOME TO</h1>
        <h1 className="head1">MERCADO</h1>
        <p className="para1">RENTING APPLIANCES AT</p>
        <p className="para2">THE EASE OF YOUR HOME</p>
      </div>
    </div>
  </div>
   </div>
    </>
  )
}

export default Home