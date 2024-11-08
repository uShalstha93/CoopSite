import React from 'react'
import '../../css/topbar.css'

const Topbar = () => {

    return (
        <>
            <div className='topbar-style-1'>
                <div className='topbar-contact'>
                    <div className='topbar-contact-1'>
                        <i className='bi bi-geo-alt-fill' />
                        <p>Tilottama 15 Kotihawa, Rupandehi, Nepal </p>
                        <span />
                    </div>
                    <div className='topbar-contact-2'>
                        <i className='bi bi-telephone-fill' />
                        <p>+977 71 514010, <b>Mobile:</b> 9857016063, 9857018141, 9847032233</p>
                    </div>
                </div>
                <div className='topbar-follow'>
                    <div className='follow-1'>
                        <p>Follow Us :</p>
                    </div>
                    <div className='follow-2'>
                        <a href='/'><i className='bi bi-facebook' /></a>
                        <a href='/'><i className='bi bi-twitter' /></a>
                        <a href='/'><i className='bi bi-linkedin' /></a>
                        <a href='/'><i className='bi bi-pinterest' /></a>
                        <a href='/'><i className='bi bi-rss-fill' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar