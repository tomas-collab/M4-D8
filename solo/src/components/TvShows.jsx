import { useEffect } from "react"
import { Link } from "react-router-dom"
const TvShows=({match,series})=>{ 
const [series, setSeries] = useState([])
    useEffect(() => {
        series= match.params.type
        const getMovie=async()=>{
            let response= await fetch(`http://www.omdbapi.com/?apikey=27d75181?s=${series}'&type=series`)
            if(response.ok){
                let movieData= await response.json()
                 setSeries(movieData)
            }
        }
    }, [match.params.type])
    return(
        <Link to='/tvShow'>
         <div>
             <img src="https.placeholde.it/120x120" alt="" />
         </div>
        </Link>
    )
}

export default TvShows