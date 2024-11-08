import React from 'react'
import BranchImg1 from '../../Images/BranchesImg/Branch2.jpg'
import BranchPerson from '../../Images/HR/ManagementTeam/BijayaThapa.jpg'
import Person1 from '../../Images/BranchesImg/Branches2/BishnumayaKuwar.JPG'
import Person2 from '../../Images/BranchesImg/Branches2/ShantiBhattaraiAdhikari.jpg'
import Person3 from '../../Images/BranchesImg/Branches2/SamitaMalla.jpg'
import Person4 from '../../Images/BranchesImg/Branches2/MayaGurung.JPG'
import Person5 from '../../Images/BranchesImg/Branches2/KalaGurung.jpg'

const Branch2 = () => {

    const BranchMemberList = [
        {
            id: '1',
            memName: 'Bishnu Maya Kuwar',
            post: 'Sub Comittee Coordinator',
            memImg: Person1
        },
        {
            id: '2',
            memName: 'Shanti Bhattarai Adhikari',
            post: 'Sub Comittee Member',
            memImg: Person2
        },
        {
            id: '3',
            memName: 'Samita Malla',
            post: 'Sub Comittee Member',
            memImg: Person3
        },
        {
            id: '4',
            memName: 'Maya Gurung',
            post: 'Sub Comittee Member',
            memImg: Person4
        },
        {
            id: '5',
            memName: 'Kala Gurung',
            post: 'Sub Comittee Member',
            memImg: Person5
        },
    ]

    return (
        <>
            <div className='main'>
                <div className='left-fixed'></div>
                <div className='container'>
                    <div className='branch-section'>
                        <div className='branch-section-left'>
                            <img src={BranchImg1} alt='Branch1' />
                        </div>
                        <div className='branch-section-right'>
                            <div className='card-section'>
                                <div className='card-section-title'>
                                    <h2>Pahuch Service Center, Bhairahawa</h2>
                                </div>
                                <div className='card-section-img'>
                                    <img src={BranchPerson} alt='card-img' />
                                    <h3>Bijaya Thapa</h3>
                                </div>
                                <div className='card-section-detail'>
                                    <h3><i className='bi bi-telephone-fill' />9857018202, 9857018212</h3>
                                    <h3><i className='bi bi-envelope-fill' />bhairahawajanautthan062@gmail.com</h3>
                                    <h3><i className='bi bi-geo-alt-fill' />Siddharthnagar-7, Nayasadak</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='branch-section-bottom'>
                        <div className='branches-top'>
                            <div className='welcome-title-center1'>
                                <h2 style={{ color: 'rgb(0, 166, 80)' }}>Pahuch Service Center, Bhairahawa</h2>
                            </div>
                        </div>
                        <div className='welcome-center'>
                            <h3>Branch Management Sub-Comittee</h3>
                        </div>
                        <div className='president2'>
                            {BranchMemberList.map((item, index) => {
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
                </div>
                <div className='right-fixed'></div>
            </div>
        </>
    )
}

export default Branch2