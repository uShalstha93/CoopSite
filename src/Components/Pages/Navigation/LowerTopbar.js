import React from 'react'
import CoopLogo from '../../Images/TopbarImg/LowerTopbarImg.jpg'
import FlagImg from '../../Images/TopbarImg/FlagNP.gif'
import AwardImg1 from '../../Images/TopbarImg/CertifiedBy1.jpg'
import AwardImg2 from '../../Images/TopbarImg/LowerTopbar2.png'
import '../../css/lower-topbar.css'

const LowerTopbar = () => {
    return (
        <>
            <div className='lower-topbar'>
                <div className='left-fixed'></div>
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-6">
                            <div className="site-logo">
                                <a href='/'><img src={CoopLogo} alt='Img-1' /></a>
                            </div>
                        </div>
                        <div className="col col-sm-1 empty"></div>
                        <div className="col col-sm-5 awards-div">
                            <div className="awards" >

                                <div className="award-info">
                                    <img src={FlagImg} alt='Img-2' />
                                </div>

                                <div className="award-info">
                                    <img src={AwardImg1} alt='Img-3' />
                                </div>

                                <div className="award-info">
                                    <img src={AwardImg2} alt='Img-4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-fixed'></div>
            </div>
        </>
    )
}

export default LowerTopbar