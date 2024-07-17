import React, { useContext, useEffect } from 'react'
import { egContext } from '../App';
import { imageUrl } from '../Task1/url';
import Rating from '@mui/material/Rating';


const Detail = () => {
  
    const test=useContext(egContext)
    console.log(test);
   useEffect(() => {
    test.setshow(false)
    console.log(test.details);
   }, [])

   
    
    
    
  return (
    <div style={{ backgroundColor:"black", color:"white", }}>
    
    <img src={imageUrl+test.details.backdrop_path} alt=""  style={{height:"500px", width:"500px" , marginTop:"50px", marginBottom:"25px"}}/>
    <h2>Name:"{test.details.original_title||test.details.name}"</h2>
    <h3 style={{width:"75%", margin:"auto"}}>{test.details.overview}</h3>
   <h3> Rating:<Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
   </h3>    <h3>Release date:{test.details.release_date}</h3>
    <h3>Language:{test.details.original_language}</h3>
    </div>
  )
}

export default Detail