import React from 'react'
import SideNav from '../Navigation/SideNav'
import { Outlet } from 'react-router-dom'

const SavingDashboard = () => {
    return (
        <>
            <div className='main'>
                <div className='left-fixed'></div>
                <div className='d-body'>
                    <div className='d-body-nav'>
                        <SideNav />
                    </div>
                    <div className='d-body-main'>
                        <Outlet />
                    </div>
                </div>
                <div className='right-fixed'></div>
            </div>
        </>
    )
}

export default SavingDashboard