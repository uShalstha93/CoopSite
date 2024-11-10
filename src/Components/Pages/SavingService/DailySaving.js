import React from 'react'
import SavingImg1 from '../../Images/SavingImg/DailySaving.jpg'

const DailySaving = () => {
    return (
        <>
            <div className='saving-body'>
                <div className='savingimg'>
                    <img src={SavingImg1} alt='saving-1' />
                </div>
                <div className='savingname'>
                    <h2>दैनिकी बचत</h2>
                </div>
            </div>
        </>
    )
}

export default DailySaving