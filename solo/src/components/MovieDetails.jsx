import {StarRatings} from 'react-star-ratings'

const MovieDetails=({movie,comment})=>{
    console.log(movie,'movie')
    return(
     <div className='text-white detail-info'>
         <img src={movie.Poster} alt="" />
         <p >{movie.Title}</p>
         <p className='here'>Summary: {movie.Plot}</p>
         <p>Aired Date: {movie.Released}</p>
     </div>
    )
}
export default MovieDetails