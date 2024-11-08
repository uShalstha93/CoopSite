import React from 'react'
import BOD1 from '../../Images/HR/BODMember/GiriPrasadPun.JPG'
import BOD2 from '../../Images/HR/BODMember/SaruRana.jpg'
import BOD3 from '../../Images/HR/BODMember/AnjuJaishi.JPG'
import BOD4 from '../../Images/HR/BODMember/NilPrasadPun.jpg'
import BOD5 from '../../Images/HR/BODMember/GangaSubedi.jpg'
import BOD6 from '../../Images/HR/BODMember/BishnumayaKuwar.JPG'
import BOD7 from '../../Images/HR/BODMember/SitaPandey.JPG'
import BOD8 from '../../Images/HR/BODMember/KhimBdeRana.jpg'
import BOD9 from '../../Images/HR/BODMember/SafiurrahamanAnshari.JPG'
import BOD10 from '../../Images/HR/BODMember/JogBdrSuryabanshi.JPG'
import BOD11 from '../../Images/HR/BODMember/BhairaBdrThapa.JPG'
import BOD12 from '../../Images/HR/BODMember/PuranBdrShahi.jpg'
import BOD13 from '../../Images/HR/BODMember/LilaKumariThapa.jpg'
import '../../css/BODmember.css'

const BoardOfDirectors = () => {

    const BodMembersList = [
        {
            id: '1',
            memName: 'Saru Rana',
            post: 'Vice President',
            memImg: BOD2
        },
        {
            id: '2',
            memName: 'Anju Jaishi',
            post: 'Secretary',
            memImg: BOD3
        },
        {
            id: '3',
            memName: 'Nil Prasad Pun',
            post: 'Treasury',
            memImg: BOD4
        },
        {
            id: '4',
            memName: 'Ganga Subedi',
            post: 'Board Member',
            memImg: BOD5
        },
        {
            id: '5',
            memName: 'Bishnumaya Kuwar',
            post: 'Board Member',
            memImg: BOD6
        },
        {
            id: '6',
            memName: 'Sita Pandey',
            post: 'Board Member',
            memImg: BOD7
        },
        {
            id: '7',
            memName: 'Khim Bdr Rana',
            post: 'Board Member',
            memImg: BOD8
        },
        {
            id: '8',
            memName: 'Safiurrahaman Anshari',
            post: 'Board Member',
            memImg: BOD9
        },
        {
            id: '9',
            memName: 'Jog Bdr Suryabanshi',
            post: 'Board Member',
            memImg: BOD10
        },
        {
            id: '10',
            memName: 'Bhaira Bdr Thapa',
            post: 'Board Member',
            memImg: BOD11
        },
        {
            id: '11',
            memName: 'Puran Bdr Shahi',
            post: 'Board Member',
            memImg: BOD12
        },
        {
            id: '12',
            memName: 'Lila Kumari Thapa',
            post: 'Board Member',
            memImg: BOD13
        }
    ]

    return (
        <>
            <div className='main'>
                <div className='left-fixed'></div>
                <div className='container'>
                    <div className='heading1'>
                        <div className='h2'>
                            <h2>Janautthan SACCOS :: Board Of Directors</h2><hr />
                        </div>
                    </div>
                    <div className='president1'>
                        <div className='president-img'>
                            <img src={BOD1} alt='BOD' />
                        </div>
                        <div className='president-detail'>
                            <h2>Giri Prasad Pun</h2>
                            <h3>President</h3>
                        </div>
                    </div>
                    <div className='president2'>
                        {BodMembersList.map((item, index) => {
                            return (
                                <div className='president2-body'>
                                    <div className='president2-img'>
                                        <img src={item.memImg} alt='BOD' />
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

export default BoardOfDirectors