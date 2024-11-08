import React, { useEffect, useState } from 'react'
import axios from '../axios'
import {API_KEY,imageUrl} from "../../constants/constants"

function Banner() {
  const[movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[1])
        const results=response.data.results
        const trendingIndex= Math.floor(Math.random()*results.length)
        const randomMovie=results[trendingIndex]
        setMovie(randomMovie)
    })
  },[])

  return (

      <div  style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}} className="Banner">
        <div className="Banner-content">
          <img
            className="logo2"
            src="https://i.pinimg.com/564x/79/e6/92/79e6929499e441d1e6464bae047d9070.jpg"
            alt="Logo"
          />
          <h1 className="Title">{movie ? movie.title : ""}</h1>
          <div className="Buttons">
            <button>
              <i className="fa-solid fa-play"></i> Play
            </button>
            <button>More Info</button>
          </div>
          <h2 className="Description">{movie ? movie.overview : ""}</h2>
        </div>
      </div>
  )
}
export default Banner
