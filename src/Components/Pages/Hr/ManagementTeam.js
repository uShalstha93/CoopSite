import React from 'react'
import Mgmtmember1 from '../../Images/HR/ManagementTeam/RanBdrThapa.JPG'
import Mgmtmember2 from '../../Images/HR/ManagementTeam/SurajJaishi.jpg'
import Mgmtmember3 from '../../Images/HR/ManagementTeam/HariBdrUchai.jpg'
import Mgmtmember4 from '../../Images/HR/ManagementTeam/PrakashBudhathoki.jpg'
import Mgmtmember5 from '../../Images/HR/ManagementTeam/RamniwashDhobi.jpg'
import Mgmtmember6 from '../../Images/HR/ManagementTeam/PashupatiHarijan.jpg'
import Mgmtmember7 from '../../Images/HR/ManagementTeam/BijayaThapa.jpg'
import Mgmtmember8 from '../../Images/HR/ManagementTeam/JogBdrThapa.jpg'
import Mgmtmember9 from '../../Images/HR/ManagementTeam/GauriChaudhary.jpg'
import Mgmtmember10 from '../../Images/HR/ManagementTeam/BhimaThapa.jpg'
import Mgmtmember11 from '../../Images/HR/ManagementTeam/KhumiGahaBaral.jpg'
import Mgmtmember12 from '../../Images/HR/ManagementTeam/KhushbuBhandari.jpg'
import Mgmtmember13 from '../../Images/HR/ManagementTeam/TaraGhimire.jpg'
import Mgmtmember14 from '../../Images/HR/ManagementTeam/SujitaShaha.jpg'
import Mgmtmember15 from '../../Images/HR/ManagementTeam/SitaChaudhary.jpg'

const ManagementTeam = () => {

    const ManagementTeamList = [
        {
            id: '1',
            memName: 'Ran Bahadur Thapa',
            post: 'Manager',
            memImg: Mgmtmember1
        },
        {
            id: '2',
            memName: 'Suraj Jaishi',
            post: 'Assistant Manager',
            memImg: Mgmtmember2
        },
        {
            id: '3',
            memName: 'Hari Bahadur Uchai',
            post: 'Account Officer',
            memImg: Mgmtmember3
        },
        {
            id: '4',
            memName: 'Prakash Budhathoki',
            post: 'IT Officer',
            memImg: Mgmtmember4
        },
        {
            id: '5',
            memName: 'Ramniwash Dhobi',
            post: 'Loan Officer',
            memImg: Mgmtmember5
        },
        {
            id: '6',
            memName: 'Pashupati Harijan',
            post: 'Branch Incharge',
            memImg: Mgmtmember6
        },
        {
            id: '7',
            memName: 'Bijaya Thapa',
            post: 'Branch Incharge',
            memImg: Mgmtmember7
        },
        {
            id: '8',
            memName: 'Jog Bahadur Thapa',
            post: 'Branch Incharge',
            memImg: Mgmtmember8
        },
        {
            id: '9',
            memName: 'Gauri Chaudhary',
            post: 'Assistant Officer',
            memImg: Mgmtmember9
        },
        {
            id: '10',
            memName: 'Bhima Thapa',
            post: 'Senior Assistant',
            memImg: Mgmtmember10
        },
        {
            id: '11',
            memName: 'Khumi Gaha Baral',
            post: 'Assistant',
            memImg: Mgmtmember11
        },
        {
            id: '12',
            memName: 'Khushbu Bhandari',
            post: 'Junior Assistant',
            memImg: Mgmtmember12
        },
        {
            id: '13',
            memName: 'Tara Ghimire',
            post: 'Junior Assistant',
            memImg: Mgmtmember13
        },
        {
            id: '14',
            memName: 'Sujita Shaha',
            post: 'Field Assistant',
            memImg: Mgmtmember14
        },
        {
            id: '15',
            memName: 'Sita Chaudhary',
            post: 'Field Assistant',
            memImg: Mgmtmember15
        }
    ]

    return (
        <>
            <div className='main'>
                <div className='left-fixed'></div>
                <div className='container'>
                    <div className='heading1'>
                        <div className='h2'>
                            <h2>Janautthan SACCOS :: Key Professional Team</h2><hr />
                        </div>
                    </div>
                    <div className='president2'>
                        {ManagementTeamList.map((item, index) => {
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

export default ManagementTeam