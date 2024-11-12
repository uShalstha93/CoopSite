import React from 'react'
import SideNavCredit from '../Navigation/SideNavCredit'
import CreditImg1 from '../../Images/CreditImg/YatayatSewaLoan.jpg'

const YatayatSewaLoan = () => {
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
                                <h2>यातायात साधन ऋण</h2>
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

export default YatayatSewaLoan