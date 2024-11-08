import React from 'react'
import Img1 from '../../Images/TestimonialImg/RanaThapa.JPG'
import Img2 from '../../Images/TestimonialImg/Giriprasadpun.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import '../../css/testimonialpage.css'


import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/autoplay"

const TestimonialPage = () => {

    const testimonialData = [
        {
            id: '1',
            message: 'संस्थाको भिजन २०८८ को लक्ष्य पुरा गर्न हाम्रा शेयर सदस्यहरुले गरेको सहयोग सह्रानिय र अतुलनीय छ । यहाहरुको विश्वास र आत्मियताप्रति हामी कर्मचारी परिवार आभारी छौं । हामी संचालक समितिले बनाइ दिएको नीतिहरु भित्र रही यहाहरुलाई गुणस्तरीय र प्रभावकारी सेवा प्रदान गर्न र यहाहरुले देखेको सपना पूरा गर्न सधै प्रतिवद्ध र तत्पर छौं । यहाहरुको सल्लाह सुझाव हाम्रा लागि सधै मार्गदर्शन रहनेछ । यहाहरु यस संस्थाको मालिक हो मालिकको सेवा गर्नु नै हामी सबै कर्मचारीको धर्म हो । यहाहरुको बचत र लगानीको सुरक्षा गर्न हामी सधै पहरेदारको रुपमा खटिरहने र आगामी दिनमा अझ नया नया आद्युनिक सेवा सुविधा प्रदान गर्दै यहाहरुको कुनै पनि वित्तीय समस्यामा जनउत्थानको उपस्थिति गराउने साथै यहाहरुको चाहाना र आवश्यकता अनुसारको सपनाहरु पुरा गर्नको लागि आवश्यक कुनै पनि वित्तीय सेवाहरु जति सक्दो छिटो छरितो र सजिलोसँग उपलब्ध गराउने प्रतिवद्धता व्यक्त गर्दछौं । हामी यहाहरुमा जात धर्म र वर्गको आधारमा कुनै पनि पक्षपात पर्ूण्ा व्यवहार देखाउनेछैनौं । सबै सदस्यको गुणस्तरीय जीवन बनाउनु हाम्रो अभियान हो ।',
            photo: Img1,
            altName: 'cover-img',
            titleName: 'रनबहादुर थापा',
            post: 'व्यवस्थापक'
        },
        {
            id: '2',
            message: 'बचत तथा ऋण सहकारीको जन्मदाता जर्मनका एफ डब्लु राइफिसनले एकका लागि सबै र सबैका लागि एक भनेका छन् । यसले आदर्श समाज निर्माणमा सहकारी मूख्य आधार हो भन्ने कुरा बुभन सकिन्छ । अबको संसारमा एक्लै रहेर केहि गर्न सकिदैन तर स्थानीय साधन श्रोत, सीप र क्षमताको ब्यापक प्रयोग गर्दै सबै मिलेर काम गर्‍यौ भने अन्तराष्ट्रिय सहकारी सिद्धान्त भित्र रही सहकारीले गर्न नहुने काम बाहेक सबै कुरा सम्भव छ । त्यसैले समुदायमा छित्रिएर रहेको पूजीलाई एकतृत गर्दै देशको उत्पादनशील क्षेत्रमा लगानी बढाएर देशको उत्पादन बर्ढाई आयातलाई प्रतिस्थापन गर्दै देशलाई आत्म निर्भर बनाउन सहकारीको मूख्य भुमिका हुन सक्छ । समाजको सबै जात धर्म लिंग संस्कृति राजनितिक आस्था भएका मानवबीच कुनै पनि भेदभाव नगरिकन मिलिजुली काम गर्ने क्षेत्र नै सहकारी हो । यसै अभ्रि्रायलाई आत्मसात गरी खोलिएको जनउत्थान सहकारीमा यहाहरु सबै शेयर सदस्य बनि यस संस्थाको मालिक बन्नु भएको छ । हामीलाई सहकारी अभियानमा साथ दिनु भएको छ । यहाहरुले हामी संचालक प्रति गरेको विश्वासले हामीलाई अझ जिम्मेबारी थपेको छ । यो जिम्मेबारी पुरा गर्न हामी सधै तत्पर छौं ।',
            photo: Img2,
            altName: 'cover-img',
            titleName: 'गिरी प्रसाद पुन',
            post: 'का व अध्यक्ष'
        }
    ]

    return (
        <>
            <div className='testimonial-body'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{
                        delay: 25000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    modules={[Autoplay, Pagination]}>
                    {testimonialData.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className='card-1'>
                                <div className='quote'>
                                    <p>{item.message}</p>
                                </div>
                                <div className='testi-body'>
                                    <div className='testi-body-img'>
                                        <img src={item.photo} alt={item.altName} />
                                    </div>
                                    <div className='testi-body-name'>
                                        <h3>{item.titleName}</h3>
                                        <span>{item.post}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default TestimonialPage