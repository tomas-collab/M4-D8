

const MovieDetails=({movie,comment})=>{
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