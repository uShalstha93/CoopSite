import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../../css/sidenav.css'
import { Link } from 'react-router-dom'

const SideNav = () => {
    return (
        <>
            <div className='sidenav-body'>
                <Navbar className='sidebar-navigation'>
                    <Container className='sidebar-container'>
                        <Nav className="justify-content-center sidenav">
                            <h4 className='h4sidelink'>सम्वन्धित पेजहरु : :</h4>
                            <Nav.Link as={Link} to='/service/saving-service/regularmonthlysaving' className='sidelink'>
                                <span>नियमित मासिक बचत</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/service/saving-service/remittancesaving' className='sidelink'>
                                <span>रेमिटयान्स बचत</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/service/saving-service/grihinisaving' className='sidelink'>
                                <span>गृहिणी बचत</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/service/saving-service/khutrukesaving' className='sidelink'>
                                <span>खुत्रुके बचत</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/service/saving-service/ujjalbhabishyasaving' className='sidelink'>
                                <span>उज्जल भविष्य बचत</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/service/saving-service/dailysaving' className='sidelink'>
                                <span>दैनिकी बचत</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/service/saving-service/sajilosaving' className='sidelink'>
                                <span>सजिलो बचत</span>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default SideNav