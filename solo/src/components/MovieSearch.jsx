import React from 'react'
import MovieSingle from './MovieSingle'
import { Col, Container, Form, Row } from 'react-bootstrap'

class MovieList extends React.Component {

    state = {
        search: ''
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search here"
                                value={this.state.search}
                                onChange={e => this.setState({ search: e.target.value })}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {
                        this.props.movieData
                            .filter( movie  =>  
                                movie
                                    .Title
                                    .toLowerCase()
                                    .includes(this.state.search))
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