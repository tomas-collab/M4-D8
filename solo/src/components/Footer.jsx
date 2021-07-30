import { Component } from 'react'
import{Col,Row,ListGroup} from 'react-bootstrap'
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube} from 'react-icons/fa'

class Footer extends Component{
    render(){
        return(
            <footer>
                <Row className='justify-content-center mt-4'>
                    <Col className='col-8'>
                        <Row className=''>
                            <Col className='col-12'>
                              
                                <FaFacebook className='ml-3'/>
                                <FaInstagram className='ml-3'/>
                                <FaTwitter className='ml-3'/>
                                <FaYoutube className='ml-3'/>
                                
                            </Col>
                            <ListGroup className='list-group col-3 d-none d-md-block d-lg-block'>
  <ListGroup.Item className='list-group'>Audio and Subtitle</ListGroup.Item>
  <ListGroup.Item className='list-group'>Media Center</ListGroup.Item>
  <ListGroup.Item className='list-group'>MPrivacy</ListGroup.Item>
  <ListGroup.Item className='list-group'>Contuct Us</ListGroup.Item>
</ListGroup>

<ListGroup className='col-3 d-none d-md-block d-lg-block'>
  <ListGroup.Item className='list-group'>Audio Description</ListGroup.Item>
  <ListGroup.Item className='list-group'>investor Relations</ListGroup.Item>
  <ListGroup.Item className='list-group'>Legal Notices</ListGroup.Item>
</ListGroup>

<ListGroup className='list-group col-3 d-none d-md-block d-lg-block'>
  <ListGroup.Item className='list-group'>Help Center</ListGroup.Item>
  <ListGroup.Item className='list-group'>Jobs</ListGroup.Item>
  <ListGroup.Item className='list-group'>Cookies Preferences</ListGroup.Item>
</ListGroup>

<ListGroup className='list-group col-3 d-none d-md-block d-lg-block'>
  <ListGroup.Item className='list-group'>Gift Cards</ListGroup.Item>
  <ListGroup.Item className='list-group'>Terms of Use</ListGroup.Item>
  <ListGroup.Item className='list-group'>Corporate information</ListGroup.Item>
</ListGroup>
                        </Row>
                
                  </Col>
                </Row>
           </footer>
        )
    }
}

export default Footer