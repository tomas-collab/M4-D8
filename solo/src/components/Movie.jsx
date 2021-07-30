import { Component } from "react";
import MoviesSingle from "./MovieSingle";
import Error from "./Error";
import Loading from "./Loading";
import {Row,Col} from 'react-bootstrap'





class Movie extends Component{ 
    state = {
       
        movieData: [], 
        isLoading: true,
        isError: false
    }

    componentDidUpdate= async (prevProps)=>{
        if(this.props.movieData!== prevProps.movieData){
            try {
                let response = await fetch('http://www.omdbapi.com/?apikey=27d75181&s=' + this.props.movieData,  )
                if (response.ok) {
                    let movieData = await response.json()
                    
                    this.setState({ 
                        movieData: movieData.Search, 
                        isLoading: false, 
                        isError: false 
                    })
                } else {
                    console.log('error')
                    this.setState({ isLoading: false, isError: true })
                }
            } catch (error) {
                console.log(error)
                this.setState({ isLoading: false, isError: true })
            }
        }
    }
   
    componentDidMount = async () => {
        try {
            let response = await fetch('http://www.omdbapi.com/?apikey=27d75181&s=' + this.props.movieData,  )
            if (response.ok) {
                let movieData = await response.json()
                console.log(movieData,'movie data')
                this.setState({ 
                    movieData: movieData.Search, 
                    isLoading: false, 
                    isError: false 
                })
            } else {
                console.log('error')
                this.setState({ isLoading: false, isError: true })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, isError: true })
        }
    }
    render(){
        const { isLoading, isError, movieData } = this.state
        return(
             
                 <> 
                  
                    { isLoading && <Loading />}
                    { isError   && <Error   />}
                     {
                        movieData && movieData.map(movie=>
                            <>
                              <Row>
                                  <Col sm={12} md={3} lg={2}>
                                      <MoviesSingle allMovies={movie}/>
                                  </Col>
                              </Row>
                                
                              </>
                           ) 
                     }
                
             </>
        )
    }
}

export default Movie