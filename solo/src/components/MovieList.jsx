import React from 'react'
import MovieSingle from './MovieSingle'
import { Col, Container, Form, Row } from 'react-bootstrap'

class MovieList extends React.Component {

    render() {
        return (
            <Container>
                <h2 className="text-left">{ this.props.galleryTitle }</h2>
                <Row>
                    {
                        this.props.movieData
                            .map( movie => 
                                <Col xs={3} key={ movie .imdbID} >
                                    <MovieSingle movie={ movie } />
                                </Col>
                            )
                    }
                </Row>
            </Container>
        )
    }

}

export default MovieList