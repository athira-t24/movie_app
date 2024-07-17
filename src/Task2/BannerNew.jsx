import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { comedyMovies, imageUrl } from '../Task1/url'

const BannerNew = () => {
    const [comedy, setcomedy] = useState([])
       
  useEffect(() => {
    axios.get(comedyMovies).then((res)=>{
        const movies=res.data.results;
        // console.log(movies);
        const randomID=Math.floor(Math.random() * movies.length);
        setcomedy(movies[randomID])
        // console.log(movies[randomID]);

   })
},[]);
// console.log(comedy)

  return (
   
    <div>
        
        {comedy &&(
            <div 
            style={{backgroundImage:`url(${imageUrl+comedy.backdrop_path})`, height:"100vh",backgroundSize:"100% 100%",display:"flex", justifyContent:"center", alignItems:"center"}}
            >
              {/* <img src='{imageUrl+comedy.backdrop_path}' alt="" /> */}
             
              <div style={{color:'white' , textAlign:"center"}}>
            <h1>{comedy.original_name}</h1>
            <p>{comedy.overview}</p>

        
            </div>
            </div>
        )}
    </div>
  )
}

export default BannerNew