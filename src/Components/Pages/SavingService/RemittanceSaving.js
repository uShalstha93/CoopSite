import React from 'react'
import SavingImg1 from '../../Images/SavingImg/RemittanceSaving.jpg'

const RemittanceSaving = () => {
    return (
        <>
            <div className='saving-body'>
                <div className='savingimg'>
                    <img src={SavingImg1} alt='saving-1' />
                </div>
                <div className='savingname'>
                    <h2>रेमिटयान्स बचत</h2>
                </div>
            </div>
        </>
    )
}

export default RemittanceSaving