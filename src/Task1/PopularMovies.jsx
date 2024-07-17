import React, { useEffect, useState } from 'react'
// import { API_KEY } from './url';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { imageUrl, popularMovies } from './url';

const PopularMovies = () => {
  const [popular, setpopular] = useState([])
    useEffect(() => {
   axios.get(popularMovies).then((res)=>setpopular(res.data.results))
    
  }, )
  console.log(popular);
  return (
    <div>
      
        {  popular.map((obj) =>
           {
            return (
                
    <Card style={{ width: "300px", height:"400px",margin:"10px 10px",float:"left"}}>
    <Card.Img variant="top" src={imageUrl+obj.backdrop_path} style={{height:"200px"}}/>
    <Card.Body style={{ width: '18rem',margin:"10px 10px"}}>
    <Card.Title> ID: {obj.id}</Card.Title>
    <Card.Title>TITLE: {obj.original_title}</Card.Title>
    <Card.Title>LANGUAGE: {obj.original_language}</Card.Title>
    <Card.Title>RELEASE DATE: {obj.release_date}</Card.Title>
      <Card.Title>POPULARITY: {obj.popularity}</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
  </Card>
            )}
            )}
            </div>
  )
}

export default PopularMovies