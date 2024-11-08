import React from 'react'
import LSCmember1 from '../../Images/HR/LoanSubComittee/SaruRana.jpg'
import LSCmember2 from '../../Images/HR/LoanSubComittee/AnjuJaishi.JPG'
import LSCmember3 from '../../Images/HR/LoanSubComittee/NilPrasadPun.jpg'

const LoanSubComittee = () => {

    const LSComitteeList = [
        {
            id: '1',
            memName: 'Saru Rana',
            post: 'Sub Comittee Coordinator',
            memImg: LSCmember1
        },
        {
            id: '2',
            memName: 'Anju Jaishi',
            post: 'Sub Comittee Coordinator',
            memImg: LSCmember2
        },
        {
            id: '3',
            memName: 'Nil Prasad Pun',
            post: 'Sub Comittee Coordinator',
            memImg: LSCmember3
        }
    ]

    return (
        <>
            <div className='main'>
                <div className='left-fixed'></div>
                <div className='container'>
                    <div className='heading1'>
                        <div className='h2'>
                            <h2>Janautthan SACCOS :: Loan Sub Comittee</h2><hr />
                        </div>
                    </div>
                    <div className='president2'>
                        {LSComitteeList.map((item, index) => {
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

export default LoanSubComittee