import React from 'react'
import ABMember1 from '../../Images/HR/AdvisoryBoard/MekhrajPun.jpg'
import ABMember2 from '../../Images/HR/AdvisoryBoard/ShyamlalKharel.jpg'
import ABMember3 from '../../Images/HR/AdvisoryBoard/IshowrchandraPokhrel.jpg'
import ABMember4 from '../../Images/HR/AdvisoryBoard/KhimKumariRana.JPG'
import ABMember5 from '../../Images/HR/AdvisoryBoard/YamBdrThapa.jpg'
import ABMember6 from '../../Images/HR/AdvisoryBoard/ShivaGaudel.JPG'

const AdvisoryBoard = () => {

    const AdvisoryBoardList = [
        {
            id: '1',
            memName: 'Mekhraj Pun',
            post: 'Advisor',
            memImg: ABMember1
        },
        {
            id: '2',
            memName: 'Shyamlal Kharel',
            post: 'Advisor',
            memImg: ABMember2
        },
        {
            id: '3',
            memName: 'Ishowrchandra Pokhrel',
            post: 'Advisor',
            memImg: ABMember3
        },
        {
            id: '4',
            memName: 'Khim Kumari Rana',
            post: 'Advisor',
            memImg: ABMember4
        },
        {
            id: '5',
            memName: 'Yam Bahadur Thapa',
            post: 'Advisor',
            memImg: ABMember5
        },
        {
            id: '6',
            memName: 'Shiva Gaudel',
            post: 'Legal Advisor',
            memImg: ABMember6
        }
    ]

    return (
        <div className='main'>
            <div className='left-fixed'></div>
            <div className='container'>
                <div className='heading1'>
                    <div className='h2'>
                        <h2>Janautthan SACCOS :: Advisory Board</h2><hr />
                    </div>
                </div>
                <div className='president2'>
                    {AdvisoryBoardList.map((item, index) => {
                        return (
                            <div className='president2-body' key={index}>
                                <div className='president2-img'>
                                    <img src={item.memImg} alt='AdvisoryBoard' />
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
    )
}

export default AdvisoryBoard