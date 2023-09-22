import React from 'react'
import Layout from '../components/Layout'

import CRUD1 from './crud1'
import PatBg from "../assets/img/PatBg.mp4"

function Patients() {
    return (
        <>
            <video autoPlay loop muted>
                <source src={PatBg} type="video/mp4" />
            </video>

            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container3'>
                    <h1> Welcome to Mercado !</h1>
                </div>
                    <CRUD1/>
            </div>

        </>
    )
}

export default Patients