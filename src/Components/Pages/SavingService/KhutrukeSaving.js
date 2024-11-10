import React from 'react'
import SavingImg1 from '../../Images/SavingImg/KhutrukeSaving.jpg'
import SideNav from '../Navigation/SideNav'

const KhutrukeSaving = () => {
    return (
        <>
            <div className='main'>
                <div className='left-fixed'></div>
                <div className='d-body'>
                    <div className='d-body-nav'>
                        <SideNav />
                    </div>
                    <div className='saving-body'>
                        <div className='savingimg'>
                            <img src={SavingImg1} alt='saving-1' />
                        </div>
                        <div className='savingname'>
                            <h2>खुत्रुके बचत</h2>
                        </div>
                    </div>
                </div>
                <div className='right-fixed'></div>
            </div>

        </>
    )
}

export default KhutrukeSaving