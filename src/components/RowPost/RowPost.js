import {React,useEffect,useState} from 'react'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../Constants/constants'
import YouTube from 'react-youtube'
import './RowPost.scss'
function RowPost(props) {
  const [urlId, setUrlId] = useState("")
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results)
      setLoading(false)
    }).catch((err)=>{
      // console.log('Network error');
    })
    
  }, [])
  function handleMovie(id){
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      if (response.data.results.length!==0) {
        setUrlId(response.data.results[0])
      }
      else{
        console.log("No trailers to show");
      }
    })
  } 
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
         {movies.map((obj)=>{
           return <img onClick={()=>{handleMovie(obj.id)}} key={obj.id} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          })}
          {
            loading && <h2>loading...</h2>
          }
        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts}/>}

    </div>
  )
}

export default RowPost