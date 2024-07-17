import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { imageUrl } from '../Task1/url'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { egContext } from '../App'



const Movies = ({movie}) => {
  const {setshow,details,setdetails,filtermov,setfiltermov,search,setmovies,movies}=useContext(egContext)
    // console.log(test);
   useEffect(() => {
    setshow(true)
   
    
   }, [])
   

    // const [movies, setmovies] = useState([])
    
  useEffect(() => {

    axios.get(movie).then((res)=>{setmovies(res.data.results);
    
    if(search.length===0){
      setfiltermov(res.data.results)
    }
     
   });
  }, [movies])
   const navigate=useNavigate()
   const Detail=(i)=>{
    navigate('/Detail')
    console.log(i);
    setdetails(i)
    
   }
   
  
// 
      
    // console.log(arg.LatestMovies);
  //  console.log(filtermov);
    return (
        <div>
          
            {  filtermov.map((obj) =>
               {
                return (
                    
        <Card style={{ width: "300px", height:"450px",margin:"10px 10px", float:"left"}}>
        <Card.Img variant="top" src={imageUrl+obj.backdrop_path} style={{height:"200px"}}/>
        <Card.Body style={{ width: '18rem',margin:"10px 10px"}}>
        <Card.Title> ID: {obj.id}</Card.Title>
        <Card.Title>TITLE: {obj.original_title|| obj.original_name}</Card.Title>
        <Card.Title>LANGUAGE: {obj.original_language}</Card.Title>
        <Card.Title>RELEASE DATE: {obj.release_date}</Card.Title>
          <Card.Title>POPULARITY: {obj.popularity}</Card.Title>
          <button onClick={()=>Detail(obj)}>Details</button>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
      </Card>
                )}
                )}
                </div>
      )
}

export default Movies