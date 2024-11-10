import React from 'react'
import SavingImg1 from '../../Images/SavingImg/RegularMonthlySaving.jpg'
import SavingImg2 from '../../Images/SavingImg/RemittanceSaving.jpg'
import SavingImg3 from '../../Images/SavingImg/GrihiniSaving.jpg'
import SavingImg4 from '../../Images/SavingImg/KhutrukeSaving.jpg'
import SavingImg5 from '../../Images/SavingImg/UjjalBhabishyaSaving.jpg'
import SavingImg6 from '../../Images/SavingImg/DailySaving.jpg'
import SavingImg7 from '../../Images/SavingImg/SajiloSaving.jpg'

const SavingAll = () => {

    const savingList = [
        {
            id: '1',
            savingName: 'नियमित मासिक बचत',
            savingImg: SavingImg1,
            path: '/service/saving-service/regularmonthlysaving'
        },
        {
            id: '2',
            savingName: 'रेमिटयान्स बचत',
            savingImg: SavingImg2,
            path: '/service/saving-service/remittancesaving'
        },
        {
            id: '3',
            savingName: 'गृहिणी बचत',
            savingImg: SavingImg3,
            path: '/service/saving-service/grihinisaving'
        },
        {
            id: '4',
            savingName: 'खुत्रुके बचत',
            savingImg: SavingImg4,
            path: '/service/saving-service/khutrukesaving'
        },
        {
            id: '5',
            savingName: 'उज्जल भविष्य बचत',
            savingImg: SavingImg5,
            path: '/service/saving-service/ujjalbhabishyasaving'
        },
        {
            id: '6',
            savingName: 'दैनिकी बचत',
            savingImg: SavingImg6,
            path: '/service/saving-service/dailysaving'
        },
        {
            id: '7',
            savingName: 'सजिलो बचत',
            savingImg: SavingImg7,
            path: '/service/saving-service/sajilosaving'
        },
    ]

    return (
        <>
            <div className='branches-div'>

                <div className='branches-body'>
                    <div className='card-container'>
                        {savingList.map((item, id) => {
                            return (
                                <div className='card' key={id}>
                                    <div className='inner'>
                                        <div className='img-holder'>
                                            <img src={item.savingImg} alt='saving-Image' />
                                        </div>
                                        <div className='detail'>
                                            <h3><a href={item.path}>{item.savingName}</a></h3>
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

export default SavingAll