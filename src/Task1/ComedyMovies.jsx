import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { comedyMovies, imageUrl } from './url';
// import { API_KEY } from './url';

const ComedyMovies = () => {
  const [comedy, setcomedy] = useState([])
  // const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";
  // const api=`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
  useEffect(() => {
   axios.get(comedyMovies).then((res)=>setcomedy(res.data.results))
    
  }, )
  console.log(comedy);
  return (
    <div>
      
        {  comedy.map((obj) =>
           {
            return (
               
    <Card style={{ width: "300px", height:"400px",margin:"10px 10px", float:"left"}}>
    <Card.Img variant="top" src={imageUrl+obj.backdrop_path} style={{height:"200px"}}/>
    <Card.Body style={{ width: '18rem',margin:"10px 10px"}}>
    <Card.Title> ID: {obj.id}</Card.Title>
    <Card.Title>TITLE: {obj.original_name}</Card.Title>
    <Card.Title>NAME: {obj.name}</Card.Title>

    <Card.Title>LANGUAGE: {obj.original_language}</Card.Title>
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

export default ComedyMovies