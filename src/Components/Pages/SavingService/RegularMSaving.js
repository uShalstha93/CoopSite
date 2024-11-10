import React from 'react'
import SavingImg1 from '../../Images/SavingImg/RegularMonthlySaving.jpg'

const RegularMSaving = () => {
    return (
        <>
            <div className='saving-body'>
                <div className='savingimg'>
                    <img src={SavingImg1} alt='saving-1' />
                </div>
                <div className='savingname'>
                    <h2>नियमित मासिक बचत</h2>
                </div>
            </div>
        </>
    )
}

export default RegularMSaving