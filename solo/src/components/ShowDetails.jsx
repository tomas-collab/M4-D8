import { useEffect,useState } from "react"
import MovieDetails from "./MovieDetails"

const ShowDetails=({match})=>{
    const [movies, setMovies] = useState(null)
    const [comment, setComment] = useState([])
    
    useEffect(() => {
       const getMovies= async()=>{
           let id = match.params.movieID
           if(id){
               const resp = await fetch('http://www.omdbapi.com/?apikey=27d75181&s='+id)
               let MovieData = await resp.json()
               console.log(MovieData,'new movie')
                setMovies(MovieData)
           }
   }
   getMovies()
    },[match.params.movieId] )

    
    useEffect(() => {
        const getComment=async()=>{
            let id = match.params.movieID
            console.log(id)
            if(id){
                const resp = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+id,{
                    headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRlZmQzZTBiYzMyYzAwMTUxZDUxNTgiLCJpYXQiOjE2MjczMTA0NDcsImV4cCI6MTYyODUyMDA0N30.2K33AKXN_oIYCcmEkHSYvPThUZK7rwxNLcVdpB19HT4"}
                })
                let commentData = await resp.json()
                console.log(commentData,'new comment')
                 setComment(commentData)
            }
    }
    getComment()
    }, [match.params.movieID])

    return(
             <div>
                 {movies && <MovieDetails movie={movies} comment={comment}/>}

             </div>
    )
}

export default ShowDetails