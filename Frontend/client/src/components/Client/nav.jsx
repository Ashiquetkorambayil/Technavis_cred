import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../Images/technavis_logo.png'
import { Link } from 'react-router-dom'
function nav() {
  return (
    <div>
         <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home" className='text-light' style={{width:'20%'}}>
            <img style={{width:'50%'}} src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'white', backgroundColor:'white'}} />
        <Navbar.Collapse>
          <Nav className="me-auto montserrat-300">
          <Link style={{textDecoration:'none'}} to={'/'}><Nav.Link href="#home" className='text-light '>Home</Nav.Link></Link>  
          <Link style={{textDecoration:'none'}} to={'/menu'}><Nav.Link href="#home" className='text-light '>Menu</Nav.Link></Link>  
          <Link style={{textDecoration:'none'}} to={'/aboutus'}><Nav.Link href="#home" className='text-light '>About us</Nav.Link></Link>  
          <Link style={{textDecoration:'none'}} to={'/dishes'}><Nav.Link href="#home" className='text-light '>To Dashbord</Nav.Link></Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default nav
