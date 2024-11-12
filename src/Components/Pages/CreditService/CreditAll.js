import React from 'react'
import creditImg1 from '../../Images/CreditImg/BaidesikRojgarLoan.jpg'
import creditImg2 from '../../Images/CreditImg/EducationLoan.jpg'
import creditImg3 from '../../Images/CreditImg/VehicleLoan.jpg'
import creditImg4 from '../../Images/CreditImg/YatayatSewaLoan.jpg'
import creditImg5 from '../../Images/CreditImg/AawashLoan.jpg'

const CreditAll = () => {

    const creditList = [
        {
            id: '1',
            creditName: 'वैदेशिक रोजगार ऋण',
            creditImg: creditImg1,
            path: '/service/loan-service/foreignloan'
        },
        {
            id: '2',
            creditName: 'शैक्षिक ऋण',
            creditImg: creditImg2,
            path: '/service/loan-service/educationloan'
        },
        {
            id: '3',
            creditName: 'सवारी साधन ऋण',
            creditImg: creditImg3,
            path: '/service/loan-service/vehicleloan'
        },
        {
            id: '4',
            creditName: 'यातायात साधन ऋण',
            creditImg: creditImg4,
            path: '/service/loan-service/yatayatsewaloan'
        },
        {
            id: '5',
            creditName: 'आवाश ऋण',
            creditImg: creditImg5,
            path: '/service/loan-service/aawashloan'
        },
    ]

    return (
        <>
            <div className='branches-div'>

                <div className='branches-body'>
                    <div className='card-container'>
                        {creditList.map((item, id) => {
                            return (
                                <div className='card' key={id}>
                                    <div className='inner'>
                                        <div className='img-holder'>
                                            <img src={item.creditImg} alt='credit-Image' />
                                        </div>
                                        <div className='detail'>
                                            <h3><a href={item.path}>{item.creditName}</a></h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreditAll