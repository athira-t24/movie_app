import React from 'react'
import { Container, Nav,  Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div><Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home"><Link to={"/PopularMovies"} style={{textDecoration:"none", color:"black"}}>Popular Movies</Link></Nav.Link>
          <Nav.Link href="#link"><Link to={"/LatestMovies"} style={{textDecoration:"none", color:"black"}}>Latest Movies</Link></Nav.Link>
          <Nav.Link href="#link"><Link to={"/ComedyMovies"} style={{textDecoration:"none", color:"black"}}>Comedy Movies</Link></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
  )
}

export default Navigation