import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { comedyMovies, imageUrl } from '../Task1/url'




const Banner = () => {
    const [comedy, setcomedy] = useState([])
        
  useEffect(() => {
    axios.get(comedyMovies).then((res)=>setcomedy(res.data.results))
     
   }, )
   console.log(comedy);
      return (
    <div>
      
        {  comedy.map((obj) =>
           {
            if (obj.id===103768) {
                
            
            return (
                             <div 
                style={{backgroundImage:`url(${imageUrl+obj.backdrop_path})`, height:"100vh",backgroundSize:"100% 100%"}}
                >
                  {/* <img src='{imageUrl+obj.backdrop_path}' alt="" /> */}
                  <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}  >
                  <div style={{color:'white' , paddingTop:"550px"}}>
                <h1>{obj.original_name}</h1>
                <p>{obj.overview}</p>

                </div>
                </div>
                </div>
               
    
            )
        }
 } )}
            </div>
  )
}

export default Banner