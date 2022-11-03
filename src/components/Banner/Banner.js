import React from 'react'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/constants'
import './Banner.scss'
export const Banner = () => {
  const [movie, setMovie] = useState("")
  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results);
      setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
  
    })
  

  }, [])
  
  return (
    <>
    <div style={{backgroundImage: `url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner' >
        <div className='content'>
          
            <h1 className='title'>{movie?movie.title?movie.title:movie.name:"loading..."}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie.overview}</h1>
        </div>
        <div className="fade_bottom">

        </div>
    </div>
    </>
  )
}
