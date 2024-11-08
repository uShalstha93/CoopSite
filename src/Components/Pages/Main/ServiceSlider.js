import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import serviceImg1 from '../../Images/TopbarImg/CertifiedBy1.jpg'
import '../../css/serviceSlider.css'

import "swiper/css";
// import "swiper/css/pagination"
import "swiper/css/autoplay"

const ServiceSlider = () => {

    const serviceList = [
        {
            id: '1',
            serviceName: 'बचत सेवा',
            detail: 'Name Saving & Credit Cooperative : बचत सेवा',
            image: serviceImg1,
            imageAlt: 'Services',
            path: '/service/saving-service'
        },
        {
            id: '2',
            serviceName: 'ऋण सेवा',
            detail: 'Name Saving & Credit Cooperative : ऋण सेवा',
            image: serviceImg1,
            imageAlt: 'Services',
            path: '/service/loan-service'
        },
        {
            id: '3',
            serviceName: 'अन्य सदस्य सेवा',
            detail: 'Name Saving & Credit Cooperative : अन्य सदस्य सेवा',
            image: serviceImg1,
            imageAlt: 'Services',
            path: '/service/other-member-sevice'
        },
        {
            id: '4',
            serviceName: 'सदस्य सम्मान कार्यक्रम',
            detail: 'Name Saving & Credit Cooperative : सदस्य सम्मान कार्यक्रम',
            image: serviceImg1,
            imageAlt: 'Services',
            path: '/service/sadasya-samman-program'
        },
    ]

    return (
        <>
            <div className='service-div'>
                <div className='service-top'>
                    <div className='welcome-title'>
                        <h2>हाम्रा सेवाहरु</h2>
                    </div>
                    <div className='service-detail'>
                        <p>समयको आवश्यकता संगसंगै हामि सेवा सुविधा चुस्त बनाउन सदैव क्रियाशिल छौं</p>
                    </div>
                    <div className="all-service-link">
                        <a href="/service" className="theme-btn">सम्पूर्ण सेवाहरु</a>
                    </div>
                </div>
                <div className='service-slider'>
                    <div className='slider-1'>
                        <div className='slider-2'>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={20}
                                loop={true}
                                grabCursor={true}
                                // pagination={{ clickable: true, dynamicBullets: true }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1
                                    },
                                    670: {
                                        slidesPerView: 2
                                    },
                                    950: {
                                        slidesPerView: 3
                                    }
                                }}
                                modules={[Autoplay]}
                                className='slide-container-product'
                            >
                                <div className="slide-content-product">
                                    <div className="card-wrapper-product">
                                        {serviceList.map((item, id) => {
                                            return (
                                                <SwiperSlide className="card" key={id}>
                                                    <div className="card-content-product">
                                                        <h4 className="name-product" >{item.serviceName}</h4>
                                                    </div>
                                                    {/* <div className="image-content-product"> */}
                                                    <div className="card-image-product">
                                                        <img src={item.image} alt={item.imageAlt} className="card-img-product" />
                                                    </div>
                                                    {/* </div> */}
                                                    <div className='detail-btn'>
                                                        <div className='card-detail-product'>
                                                            <p>{item.detail}</p>
                                                        </div>
                                                        <div className="card-btn-product">
                                                            <a href={item.path} className="theme-btn">Get Details</a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })}
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSlider