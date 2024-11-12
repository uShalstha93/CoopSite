import React, { useState, useEffect } from 'react'
import Topbar from './Topbar'
import LowerTopbar from './LowerTopbar'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import '../../css/navibar.css'
import {
    aboutUsDropdown,
    hrDropdown,
    servicesDropdown,
    reportDropdown
} from './NavItems'

const Navibar = () => {

    const location = useLocation()

    const [activePage, setActivePage] = useState(location.pathname)

    const [sticky, setSticky] = useState(false)

    const [expanded, setExpanded] = useState(false)

    const resetScroll = () => {
        window.scrollTo({
            top: 0
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 190)
            // console.log(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    const handleLinkClick = (path) => {
        setActivePage(path)
        resetScroll()
        setExpanded(false) // Collapse the navbar
    }

    return (

        <>
            <div className='topbar1'>
                <Topbar />
            </div>
            <div className='topbar2'>
                <LowerTopbar />
            </div>
            <div className={`${sticky ? "sticky" : ""}`}>
                <Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} collapseOnSelect expand='lg' className='navigationbar'>
                    <Container className='containernav'>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='iconnav' onClick={() => setExpanded(!expanded)} />
                        <Navbar.Collapse id="responsive-navbar-nav" in={expanded}>
                            <Nav className="justify-content-center Nav">

                                <Nav.Link as={Link} to="/" className="link">

                                    <span className={`${activePage === "/" ? "active" : ""}`} onClick={() => handleLinkClick('/')}>
                                        गृहपृष्ठ
                                    </span>

                                </Nav.Link>

                                <NavDropdown
                                    title={<span className="link">हाम्रो बारेमा</span>}
                                    id="collasible-nav-dropdown"
                                    className='link'
                                >

                                    {aboutUsDropdown.map((item1, id) => {
                                        return (
                                            <NavDropdown.Item as={Link} to={item1.path} className={item1.cName} key={id} onClick={() => handleLinkClick(item1.path)}>
                                                <span className={`${activePage === item1.path ? "active" : ""}`}>{item1.title}</span>
                                            </NavDropdown.Item>
                                        )
                                    })}

                                </NavDropdown>

                                <NavDropdown
                                    title={<span className="link">मानविय श्रोत</span>}
                                    id="collasible-nav-dropdown"
                                    className='link'
                                >

                                    {hrDropdown.map((item1, id) => {
                                        return (
                                            <NavDropdown.Item as={Link} to={item1.path} className={item1.cName} key={id} onClick={() => handleLinkClick(item1.path)}>
                                                <span className={`${activePage === item1.path ? "active" : ""}`}>{item1.title}</span>
                                            </NavDropdown.Item>
                                        )
                                    })}

                                </NavDropdown>

                                <NavDropdown
                                    title={<span className="link">हाम्रा सेवाहरु</span>}
                                    id="collasible-nav-dropdown"
                                    className='link'
                                >

                                    {servicesDropdown.map((item1, id) => {
                                        return (
                                            <NavDropdown.Item as={Link} to={item1.path} className={item1.cName} key={id} onClick={() => handleLinkClick(item1.path)}>
                                                <span className={`${activePage === item1.path ? "active" : ""}`}>{item1.title}</span>
                                            </NavDropdown.Item>
                                        )
                                    })}

                                </NavDropdown>

                                <Nav.Link as={Link} to="/socialservice" className="link"><span className={`${activePage === "/socialservice" ? "active" : ""}`} onClick={() => handleLinkClick('/socialservice')}>सामाजिक सेवा</span></Nav.Link>

                                <Nav.Link as={Link} to="/successstory" className="link"><span className={`${activePage === "/successstory" ? "active" : ""}`} onClick={() => handleLinkClick('/successstory')}>सफलताका कथा</span></Nav.Link>

                                <NavDropdown
                                    title={<span className="link">प्रतिवेदन</span>}
                                    id="collasible-nav-dropdown"
                                    className='link'
                                >

                                    {reportDropdown.map((item1, id) => {
                                        return (
                                            <NavDropdown.Item as={Link} to={item1.path} className={item1.cName} key={id} onClick={() => handleLinkClick(item1.path)}>
                                                <span className={`${activePage === item1.path ? "active" : ""}`}>{item1.title}</span>
                                            </NavDropdown.Item>
                                        )
                                    })}

                                </NavDropdown>

                                <Nav.Link as={Link} to="/award" className="link"><span className={`${activePage === "/award" ? "active" : ""}`} onClick={() => handleLinkClick('/award')}>संस्थागत सम्मानहरु</span></Nav.Link>

                                <Nav.Link as={Link} to="/membership" className="link"><span className={`${activePage === "/membership" ? "active" : ""}`} onClick={() => handleLinkClick('/membership')}>शेयर सदस्यताको लागि</span></Nav.Link>

                                <Nav.Link as={Link} to="/calendar" className="link"><span className={`${activePage === "/calendar" ? "active" : ""}`} onClick={() => handleLinkClick('/calendar')}>क्यालेण्डर</span></Nav.Link>

                                <Nav.Link as={Link} to="/gallery" className="link"><span className={`${activePage === "/gallery" ? "active" : ""}`} onClick={() => handleLinkClick('/gallery')}>फोटो फिचर</span></Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Navibar