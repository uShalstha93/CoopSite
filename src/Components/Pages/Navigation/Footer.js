import React from 'react'
import '../../css/footer.css'

const Footer = () => {

    const currentDate = new Date().getFullYear()

    return (
        <>
            <div className='footer-section'>
                <div className="text-center">
                    <h6 className="text-center mt-2">&copy; {currentDate} OXPAN Microsys Pvt. Ltd. All rights reserved.</h6>
                </div>
            </div>
        </>
    )
}

export default Footer