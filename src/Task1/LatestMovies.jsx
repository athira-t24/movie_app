import React, { useEffect } from 'react'
import { useState } from 'react';
import axios, {} from 'axios'
import { Card } from 'react-bootstrap';
import { imageUrl, latestMovies } from './url';
// import { API_KEY } from './url';

const LatestMovies = () => {
  const [latest, setlatest] = useState([])
  // const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";
  // const api=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
  useEffect(() => {
   axios.get(latestMovies).then((res)=>setlatest(res.data.results))
    
  }, )
  console.log(latest);
  return (
    <div>
      
        {  latest.map((obj) =>
           {
            return (
                
    <Card style={{ width: "300px", height:"400px",margin:"10px 10px", float:"left"}}>
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

export default LatestMovies