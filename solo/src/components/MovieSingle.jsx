
import {Popover,OverlayTrigger,Button} from 'react-bootstrap'
import CommentForm from './CommentForm';
import CommentList from "./CommentList";


const MoviesSingle =({allMovies})=>{


   const { Poster, Title, imdbID } = allMovies
   
   
        return(
            
            <div  className='ml-2' >
                <img src={Poster}
                style={{height:200, width:200}}/>
               
            <OverlayTrigger
            className='comment-text'
                            trigger="click"
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Popover className='comment-text' id='popover-positioned-bottom'>                                       
                                <Popover.Content> 
                                    <p className='text-white'> previous Comments:</p>                                                   
                                 <CommentList imdbID={ imdbID } />                  
                                </Popover.Content>
                                </Popover>
                            }
                            >
                            <button className='button'> <h6 className='movie-title'>{Title}</h6></button>
                </OverlayTrigger>
               
            </div>
           
                    
                      
     
        )
  
}
export default MoviesSingle


