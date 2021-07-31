

const MovieDetails=({movie,comment})=>{
    console.log(movie,'movie')
    return(
     <div>
         <img src={movie.Poster} alt="" />
         <p>{movie.Title}</p>
         <ul>
             {comment.map(c=> <li>{c.comment}</li> )}
         </ul>
     </div>
    )
}
export default MovieDetails