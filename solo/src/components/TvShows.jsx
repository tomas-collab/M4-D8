import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

const TvShows=({title})=>{ 
const [movies, setMovies] = useState([])
    useEffect(() => {
       
        const getMovie=async()=>{
            let response= await fetch(`http://www.omdbapi.com/?apikey=27d75181?s=${title}&type=series`)
            if(response.ok){
                let movieData= await response.json()
                 setMovies(movieData)
            }else{
                console.log('not working ')
            }
        }
    }, [])
    console.log('moviesss',movies)
    return(
       
         <div>
             <img src={movies.Poster} />
         </div>
      
    )
}

export default TvShows