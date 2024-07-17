import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Nav,  Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { popularMovies,latestMovies,comedyMovies} from '../Task1/url'
import axios from 'axios'
import { egContext } from '../App'


const Navigation1 = () => {
  const {search,searchFun,setSearch}=useContext(egContext)

  // const [latest, setlatest] = useState([])
  // const [popular, setpopular] = useState([])
  // const [comedy, setcomedy] = useState([])
  // useEffect(() => {
  //   axios.get(popularMovies).then((res)=>setpopular(res.data.results))
     
  //  }, )
  //  useEffect(() => {
  //   axios.get(latestMovies).then((res)=>setlatest(res.data.results))
     
  //  }, )
//   useEffect(() => {
    
  
//     return () => {
//       setfilter(movies)
//     }
//   },[movies] )
 
    return (
    <div><Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Movies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home"><Link to={"/Moviespopular"} style={{textDecoration:"none", color:"black"}}>Popular Movies</Link></Nav.Link>
          <Nav.Link href="#link"><Link to={"/Movieslatest"} style={{textDecoration:"none", color:"black"}}>Latest Movies</Link></Nav.Link>
          <Nav.Link href="#link"><Link to={"/Moviescomedy"} style={{textDecoration:"none", color:"black"}}>Comedy Movies</Link></Nav.Link>
          
        <input
          type="text"
          defaultValue={search}
          onChange={(e) => 
            // console.log(e.target.value)
            // 
            setSearch(e.target.value)

          } 
          // style={{ marginLeft: '10px'  ,marginTop:"10px"}}
        
        /> 
       
        <Button type="primary" style={{padding:"5px"}} 
        onClick={searchFun}
> Search</Button> 
 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
  
}

export default Navigation1