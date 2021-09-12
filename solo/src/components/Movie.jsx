import { Component } from "react";
import MoviesSingle from "./MovieSingle";
import Error from "./Error";
import Loading from "./Loading";
import {Row,Col, Container} from 'react-bootstrap'
import {useEffect,useState} from 'react'





const Movie = (props) =>{ 
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
  

    // componentDidUpdate= async (prevProps)=>{
    //     if(this.props.movieData!== prevProps.movieData){
    //         try {
    //             let response = await fetch('http://www.omdbapi.com/?apikey=27d75181&s=' + this.props.movieData,  )
    //             if (response.ok) {
    //                 let movieData = await response.json()
    //                 console.log(movieData,'movies')
    //                 this.setState({ 
    //                     movieData: movieData.Search, 
    //                     isLoading: false, 
    //                     isError: false 
    //                 })
    //             } else {
    //                 console.log('error')
    //                 this.setState({ isLoading: false, isError: true })
    //             }
    //         } catch (error) {  
    //             console.log(error)
    //             this.setState({ isLoading: false, isError: true })
    //         }
    //     }
    // }

    useEffect(() => {
       const fetchMovies =async()=>{
        try {
            let response = await fetch('http://www.omdbapi.com/?apikey=27d75181&s=' + this.props.movieData,  )
            if (response.ok) {
                let movieData = await response.json()
                console.log(movieData,'movies')
                setMovies(movieData.Search)
                setIsLoading(false)
                setIsError(false)
            } else {
                console.log('error')
                setIsLoading(false)
                setIsError(true)
               
            }
        } catch (error) {  
            console.log(error)
            isLoading(false)
            isError(true)
        }
       }
    }, [movies])


    useEffect(() => {
       const fetchMovies =async()=>{
        try {
            let response = await fetch('http://www.omdbapi.com/?apikey=27d75181&s=' + this.props.movieData,  )
            if (response.ok) {
                let movieData = await response.json()
                console.log(movieData,'movies')
                setMovies(movieData.Search)
                setIsLoading(false)
                setIsError(false)
            } else {
                console.log('error')
                setIsLoading(false)
                setIsError(true)
               
            }
        } catch (error) {  
            console.log(error)
            isLoading(false)
            isError(true)
        }
       }
    }, [])

   
    // componentDidMount = async () => {
    //     try {
    //         let response = await fetch('http://www.omdbapi.com/?apikey=27d75181&s=' + this.props.movieData,  )
    //         if (response.ok) {
    //             let movieData = await response.json()
    //             console.log(movieData,'movieData')
    //             this.setState({ 
    //                 movieData: movieData.Search, 
    //                 isLoading: false, 
    //                 isError: false 
    //             })
    //         } else {
    //             console.log('error')
    //             this.setState({ isLoading: false, isError: true })
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         this.setState({ isLoading: false, isError: true })
    //     }
    // }
  
 
        return(
              
            <> 
            
                   
                    { isLoading && <Loading />}
                    { isError   && <Error   />}
                   
            
                   
            
                 {      
                         movies && movies.map(movie=>
                                   
                            <Row>                                
                                  <Col sm={12} md={3} lg={2}>
                                      <MoviesSingle allMovies={movie}/>
                                  </Col>
                            </Row>
                                ) 
                            }
                          
                
             </>
           
        )
   
}

export default Movie