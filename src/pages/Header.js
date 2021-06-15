import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import LogoBrand from '../images/logo.png'
import {AiFillDashboard, AiOutlineAreaChart} from 'react-icons/ai'
import {MdWidgets} from 'react-icons/md'
const Header = () => {
    return (
       <div className="position-fixed start-0 end-0 top-0 header">
        <Navbar bg="light" expand="lg"> 
            <Container>
                <Navbar.Brand href="/">
                    <img src={LogoBrand} alt="" className="w-25"/>
                    <span className="ms-3 fw-bold">CovidTracker</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/" className="header-item d-flex align-items-center ">
                            <AiFillDashboard className="fs-6 me-2"/>
                            Dashboard
                        </Nav.Link>
                        <Nav.Link href="/widget" className="header-item d-flex align-items-center">
                            <MdWidgets className="fs-6 me-2"/>
                            Widget
                        </Nav.Link>
                        <Nav.Link href="/charts" className="header-item d-flex align-items-center">
                            <AiOutlineAreaChart className="fs-6 me-2 "/>
                            Charts
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
      </div>
       
    )
}

export default Header
