import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

const TvShows=(props)=>{ 
const [movies, setMovies] = useState([])
console.log('moviesss',movies)
    useEffect(() => {
        const getMovie=async()=>{
            let response= await fetch(`http://www.omdbapi.com/?apikey=27d75181&s=`+props.title)
            if(response.ok){
                let movieData= await response.json()
                 setMovies(movieData)
            }else{
                console.log('not working ')
            }
        }
    }, [movies])
  
    return(
       
         <div>
             <img src={movies.Poster} />
         </div>
      
    )
}

export default TvShows