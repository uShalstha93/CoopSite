import React from 'react'
import APSCmember1 from '../../Images/HR/AssetsPurchaseSubComittee/NilPrasadPun.jpg'
import APSCmember2 from '../../Images/HR/AssetsPurchaseSubComittee/BuddhibalNeupane.jpg'
import APSCmember3 from '../../Images/HR/AssetsPurchaseSubComittee/YamBdrKC.jpg'

const AssetsPurchaseSubComittee = () => {

    const APSCList = [
        {
            id: '1',
            memName: 'Nil Prasad Pun',
            post: 'Assets Purchase SubComittee Coordinator',
            memImg: APSCmember1
        },
        {
            id: '2',
            memName: 'Buddhibal Neupane',
            post: 'Assets Purchase SubComittee Member',
            memImg: APSCmember2
        },
        {
            id: '3',
            memName: 'Yam Bahadur KC',
            post: 'Assets Purchase SubComittee Member',
            memImg: APSCmember3
        }
    ]

    return (
        <>
            <div className='main'>
                <div className='left-fixed'></div>
                <div className='container'>
                    <div className='heading1'>
                        <div className='h2'>
                            <h2>Janautthan SACCOS :: Assets Purchase Sub Comittee</h2><hr />
                        </div>
                    </div>
                    <div className='president2'>
                        {APSCList.map((item, index) => {
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

export default AssetsPurchaseSubComittee