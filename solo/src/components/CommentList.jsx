import { Component } from "react";
import CommentForm from "./CommentForm";
import StarRatings from 'react-star-ratings'


class CommentList extends Component{
    state={
        comment:[]
    }
    onAddComment=(addComment)=>{
        this.setState({comment:[...this.state.comment,addComment]})
    }
    componentDidMount= async()=>{
        console.log(this.props)
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+this.props.imdbID,{
            headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRlZmQzZTBiYzMyYzAwMTUxZDUxNTgiLCJpYXQiOjE2MjczMTA0NDcsImV4cCI6MTYyODUyMDA0N30.2K33AKXN_oIYCcmEkHSYvPThUZK7rwxNLcVdpB19HT4"}
        })
        if(response.ok){
            const data= await response.json()
            console.log('data',data)
            this.setState({comment:data})
        }else{
            console.log('error')
        }
    }
    render(){
        return(
            <>
            <ul>
                {
               this.state.comment.map(comm=> 
                    <p className='comment-text'>
                       
                   {<li className='d-block mb-2'>{comm.comment}</li> } 
                   {
                       <StarRatings
                       rating={comm.rate}
                       starRatedColor="yellow"
                       starEmptyColor='gray'                    
                       starDimension='22px'
                       starSpacing='0px'                    
                       numberOfStars={5}
                     
               /> }            
                   </p>
                )
                }
            </ul>
            <p className='text-white'><strong>Add Comment Below</strong></p>
            <CommentForm onAddComment={this.onAddComment} imdbID={this.props.imdbID}/>
            </>
            
        )
    }
}
export default CommentList 