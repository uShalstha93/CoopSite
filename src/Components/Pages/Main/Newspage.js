import React from 'react'
import '../../css/newspage.css'

const Newspage = () => {
    return (
        <>
            <div className='news-div'>
                <div className='service-top'>
                    <div className='welcome-title'>
                        <h2>जनउत्थान समाचार</h2>
                    </div>
                    <div className='service-detail'>
                        <p>जनउत्थान सहकारीका गतिविधिहरु हेर्नुहोस</p>
                    </div>
                    <div className="all-service-link">
                        <a href="/news" className="theme-btn">सवै हेर्नको लागि</a>
                    </div>
                </div>
                <div className='news-slider'>
                    <div className='newsSlider-1'>
                        <div className='newsSlider-2'>
                            <p>Coming Soon......</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newspage