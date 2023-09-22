import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import Table from './Table'
import Card from './card'




function Dashboard() {
    const user=useSelector(selectUser)
    return (
        <>

            <Layout />
            <div className='dbg'>
            <div className='main-wrapper'>
                <div className='welcome-container1'>
                    <h1> Welcome <span className=' username-color'>{user.username} </span> to MERCADO ! </h1>
                </div>
                <Table/>
            
                </div>
                <div><img class="square" src={require('../assets/img/PIE.png')} alt="user" /></div>
                <Card/>
                
                <div class="div1">
                    <div class='div2'>Renting made easy</div>
                    <div class='div3'>Doorstep delivery!!</div>
                </div>
           
                    <div class='div4'></div>
                    <div class='div5'></div>
                    <div class='div6'></div>

            </div>
        </>
        
    )
}

export default Dashboard