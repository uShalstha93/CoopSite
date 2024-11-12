import React from 'react'
import SideNavCredit from '../Navigation/SideNavCredit'
import CreditImg1 from '../../Images/CreditImg/VehicleLoan.jpg'

const VehicleLoan = () => {
    return (
        <>

            <div className='main'>
                <div className='left-fixed'></div>
                <div className='d-body'>
                    <div className='d-body-nav'>
                        <SideNavCredit />
                    </div>
                    <div className='d-body-main'>
                        <div className='saving-body'>
                            <div className='savingimg'>
                                <img src={CreditImg1} alt='credit-1' />
                            </div>
                            <div className='savingname'>
                                <h2>सवारी साधन ऋण</h2>
                            </div>
                            <div className='apply-btn'>
                                <button>Apply For Loan</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-fixed'></div>
            </div>
        </>
    )
}

export default VehicleLoan