import React from 'react'
import Layout from '../components/Layout'
import '../assets/css/style.css'
import CRUD from './crud'
import DocBg from "../assets/img/DocBg.mp4"

function Doctors() {
    return (
        <>

                             
            <video autoPlay loop muted>
                <source src={DocBg} type="video/mp4" />
            </video>

            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container2'>
                    <h1> Welcome Users to Mercado ! </h1>
                </div>
                <CRUD/>
            </div>
        </>
    )
}

export default Doctors