import axios from '../axios'
import {useEffect,useState } from 'react'
import { imageUrl,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube'
import React from 'react'

function Cards(props) {
  const [movie,setMovie]=useState([])
  const[urlId,seturlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results)
    })
  },[props.url])

  const trailerView=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }
    })
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={props.isSmall ? 'Cards':'cards2'}>
    <h1 className='card-title'>{props.title}</h1>
      <div className='card-poster'>
        {
          movie.map((obj)=>{
              return(
                <img onClick={()=>trailerView(obj.id)} src={`${imageUrl+obj.poster_path}`} alt='poster'/>
              )
          })
        }      
      </div>
      <div className='Trailer'>
      {urlId &&< YouTube opts={opts} videoId={urlId.key}   />}
      </div>
    </div>
  )
}

export default Cards
