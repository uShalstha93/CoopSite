import React from 'react'
import ACom1 from '../../Images/HR/AccountComittee/Khumakanta Adhikari.jpg'
import ACom2 from '../../Images/HR/AccountComittee/RamBdrSomare.png'
import ACom3 from '../../Images/HR/AccountComittee/RupaBhandari.JPG'

const AccountComittee = () => {

    const ComitteeList = [
        {
            id: '1',
            memName: 'Khumakanta Adhikari',
            post: 'Account Supervisory Comittee Coordinator',
            memImg: ACom1
        },
        {
            id: '2',
            memName: 'Ram Bahadur Somare',
            post: 'Account Supervisory Comittee Member',
            memImg: ACom2
        },
        {
            id: '3',
            memName: 'Rupa Bhandari',
            post: 'Account Supervisory Comittee Member',
            memImg: ACom3
        }
    ]

    return (
        <>
            <div className='main'>
                <div className='left-fixed'></div>
                <div className='container'>
                    <div className='heading1'>
                        <div className='h2'>
                            <h2>Janautthan SACCOS :: Account Comittee</h2><hr />
                        </div>
                    </div>
                    <div className='president2'>
                        {ComitteeList.map((item, index) => {
                            return (
                                <div className='president2-body' key={index}>
                                    <div className='president2-img'>
                                        <img src={item.memImg} alt='AccountComittee' />
                                    </div>
                                    <div className='president2-detail'>
                                        <h2>{item.memName}</h2>
                                        <h3>{item.post}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='right-fixed'></div>
            </div>
        </>
    )
}

export default AccountComittee