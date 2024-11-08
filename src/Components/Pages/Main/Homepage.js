import React from 'react'
import '../../css/homepage.css'
import WelcomeImg from '../../Images/TopbarImg/FlagNP.gif'
import ServiceSlider from './ServiceSlider'
import Newspage from './Newspage'
import BranchesPage from './BranchesPage'
import FAQPage from './FAQPage'
import TestimonialPage from './TestimonialPage'

const Homepage = () => {
    return (
        <>

            <div className='main'>
                <div className='left-fixed'></div>
                <div className='container'>
                    <div className='welcome-title'>
                        <h2>नमस्कार</h2>
                    </div>
                    <div className='welcome-body'>
                        <div className="welcome-text">
                            <p>हाम्रो वेवसाइटमा यहाँहरुलाई हार्दिक स्वागत गर्दछौं ।<br />आज सम्म आउदा हामीमा आत्मविश्वास बढाउने र निरन्तर सहयोग गर्नुहुने यहाँहरु जस्तै वेवसाइट भिजिर्टसहरु, विभिन्न संघ संस्था, शुभचिन्तक तथा शेयर सदस्यहरुप्रति हामी आभारी छौं । यहाँहरुको प्रत्यक्ष अप्रत्यक्ष सहयोगहरु हाम्रो इतिहासमा स्वर्ण अक्षरले लेखिनेछन । आगामी दिनहरुमा पनि यहाँहरुको निरन्तर माया र सहयोग पाइरहने अपेक्षा गरिरहेका छौं । हामी यहाँहरुलाई अझै गुणस्तरीय र प्रभावकारी सेवा प्रदान गर्ने प्रतिवद्धता व्यक्त गर्दछौ ।<br /><b>गिरी प्रसाद पुन</b><br /><b>अध्यक्ष</b></p>
                            <a href="/" className="theme-btn read-more">Read More</a>
                        </div>
                        <div className='welcome-image'>
                            <img src={WelcomeImg} alt='welcome-image' />
                        </div>
                    </div>
                    <div className='service-slider-section'>
                        <ServiceSlider />
                    </div>
                    <div className='news-slider-section'>
                        <Newspage />
                    </div>
                    <div className='branches-section'>
                        <BranchesPage />
                    </div>
                    <div className='faq-section'>
                        <FAQPage />
                    </div>
                    <div className='testimonial-section'>
                        <TestimonialPage />
                    </div>
                </div>
                <div className='right-fixed'></div>
            </div>

        </>
    )
}

export default Homepage