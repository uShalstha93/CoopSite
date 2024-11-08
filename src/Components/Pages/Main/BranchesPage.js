import React from 'react'
import '../../css/branchespage.css'
import BranchImg1 from '../../Images/BranchesImg/Branch1.jpg'
import BranchImg2 from '../../Images/BranchesImg/Branch2.jpg'
import BranchImg3 from '../../Images/BranchesImg/Branch3.jpg'
import BranchImg4 from '../../Images/BranchesImg/Branch4.jpg'
import BranchImg5 from '../../Images/BranchesImg/Branch5.jpg'
import BranchImg6 from '../../Images/BranchesImg/Branch6.jpg'
import BranchImg7 from '../../Images/BranchesImg/Branch7.jpg'
import BranchImg8 from '../../Images/BranchesImg/Branch8.jpg'
import BranchImg9 from '../../Images/BranchesImg/Branch9.jpg'
import BranchImg10 from '../../Images/BranchesImg/Branch10.jpg'

const BranchesPage = () => {

    const BranchesList = [
        {
            branchID: '1',
            branchName: 'Kotihawa Service Center, Kotihawa',
            bImage: BranchImg1,
            path: '/branches/kotihawa-service-center'
        },
        {
            branchID: '2',
            branchName: 'Pahuch Service Center, Bhairahawa',
            bImage: BranchImg2,
            path: '/branches/pahuch-service-center'
        },
        {
            branchID: '3',
            branchName: 'Manigram Service Center, Manigram',
            bImage: BranchImg3,
            path: '/branches/manigram-service-center'
        },
        {
            branchID: '4',
            branchName: 'Sudridh Service Center, Manpakadi, Bakulibajar',
            bImage: BranchImg4,
            path: '/branches/sudridh-service-center'
        },
        {
            branchID: '5',
            branchName: 'Pataksar Service Center, Thutipipal',
            bImage: BranchImg5,
            path: '/branches/pataksar-service-center'
        },
        {
            branchID: '6',
            branchName: 'Lumbini Service Center, Lumbini Bajar',
            bImage: BranchImg6,
            path: '/branches/lumbini-service-center'
        },
        {
            branchID: '7',
            branchName: 'Rudrapur Service Center, Thakalichok Kanchan',
            bImage: BranchImg7,
            path: '/branches/rudrapur-service-center'
        },
        {
            branchID: '8',
            branchName: 'Butwal Service Center, Butwal',
            bImage: BranchImg8,
            path: '/branches/butwal-service-center'
        },
        {
            branchID: '9',
            branchName: 'Tamnagar Service Center, Tamanagar',
            bImage: BranchImg9,
            path: '/branches/tamnagar-service-center'
        },
        {
            branchID: '10',
            branchName: 'Murgiya Service Center, Murgiya',
            bImage: BranchImg10,
            path: '/branches/murgiya-service-center'
        }
    ]

    return (
        <>
            <div className='branches-div'>
                <div className='branches-top'>
                    <div className='welcome-title-center'>
                        <h2>हाम्रा सेवाकेन्द्रहरु</h2>
                    </div>
                </div>
                <div className='branches-body'>
                    <div className='card-container'>
                        {BranchesList.map((item, id) => {
                            return (
                                <div className='card' key={id}>
                                    <div className='inner'>
                                        <div className='img-holder'>
                                            <img src={item.bImage} alt='Branch-Image' />
                                        </div>
                                        <div className='detail'>
                                            <h3><a href={item.path}>{item.branchName}</a></h3>
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

export default BranchesPage