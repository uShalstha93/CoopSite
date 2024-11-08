import React, { useState, useRef } from 'react'
import '../../css/faqpage.css'

const FAQPage = () => {

    const [activeIndex, setActiveIndex] = useState(null)

    const accordionData = [
        {
            title: 'सदस्यता लिनको लागि के गर्नु पर्छ?',
            content: `नयाँ सदस्यताको लागि आवेदन दिनु पर्दछ`
        },
        {
            title: 'Title 2',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'Title 3',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle selected accordion or collapse if clicked again
    };

    return (
        <>
            <div className='faq-div'>
                <div className='faq-top'>
                    <div className='faq-title'>
                        <h2>तपाइको सहयोगको लागि धेरै सोधिने प्रश्न र तीनका उत्तरहरु यहाँ समावेश छन्</h2>
                    </div>
                </div>
                <div className='accordion'>
                    {accordionData.map((item, index) => (
                        <Accordion
                            key={index}
                            title={item.title}
                            content={item.content}
                            isActive={index === activeIndex}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default FAQPage

const Accordion = ({ title, content, isActive, onToggle }) => {

    const contentRef = useRef(null)

    return (
        <div className='accordion-item'>
            <div className='accordion-title' onClick={onToggle}>
                <h3>{title}</h3>
                <h3>
                    {isActive ?
                        <i className='bi bi-chevron-down' /> :
                        <i className='bi bi-chevron-up' />}
                </h3>
            </div>
            {/* {isActive && <div className='accordion-content'>{content}</div>} */}
            <div className='accordion-content' ref={contentRef}
                style={{
                    height: isActive ? `${contentRef.current.scrollHeight}px` : '0px',
                    overflow: 'hidden',
                    transition: 'height 0.5s ease'
                }}>
                <p>{content}</p>
            </div>
        </div>
    )
}
