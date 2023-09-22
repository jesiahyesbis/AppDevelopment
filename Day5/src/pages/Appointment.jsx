 import React from 'react'
import Layout from '../components/Layout'

import CRUD2 from './crud2'
import AppointmentBg from "../assets/img/AppointmentBg.mp4"

function Appointment() {
    return (
        <>
            <video autoPlay loop muted>
                <source src={AppointmentBg} type="video/mp4" />
            </video>

            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container3'>
                    <h1> Welcome to Mercado !</h1>
                </div>
                    <CRUD2/>
            </div>

        </>
    )
}

export default Appointment