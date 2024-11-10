import React from 'react'
import SavingImg1 from '../../Images/SavingImg/DailySaving.jpg'
import SideNav from '../Navigation/SideNav'

const DailySaving = () => {
    return (
        <>

            <div className='main'>
                <div className='left-fixed'></div>
                <div className='d-body'>
                    <div className='d-body-nav'>
                        <SideNav />
                    </div>
                    <div className='d-body-main'>
                        <div className='saving-body'>
                            <div className='savingimg'>
                                <img src={SavingImg1} alt='saving-1' />
                            </div>
                            <div className='savingname'>
                                <h2>दैनिकी बचत</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-fixed'></div>
            </div>

        </>
    )
}

export default DailySaving