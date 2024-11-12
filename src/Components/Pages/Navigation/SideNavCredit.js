import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SideNavCredit = () => {
    return (
        <>
            <div className='sidenav-body'>
                <Navbar className='sidebar-navigation'>
                    <Container className='sidebar-container'>
                        <Nav className="justify-content-center sidenav">
                            <h4 className='h4sidelink'>सम्वन्धित पेजहरु : :</h4>
                            <Nav.Link as={Link} to='/service/loan-service/foreignloan' className='sidelink'>
                                <span>वैदेशिक रोजगार ऋण</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/service/loan-service/educationloan' className='sidelink'>
                                <span>शैक्षिक ऋण</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/service/loan-service/vehicleloan' className='sidelink'>
                                <span>सवारी साधन ऋण</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/service/loan-service/yatayatsewaloan' className='sidelink'>
                                <span>यातायात साधन ऋण</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/service/loan-service/aawashloan' className='sidelink'>
                                <span>आवाश ऋण</span>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default SideNavCredit