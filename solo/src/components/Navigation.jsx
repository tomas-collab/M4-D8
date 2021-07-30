import React from 'react';
import { Component } from 'react';
import { Nav,Container,Navbar, FormControl, NavDropdown } from 'react-bootstrap';
import {BsBell} from 'react-icons/bs'
import {MdFace} from 'react-icons/md'

class Navigation extends Component {
    render(){
    return ( 
        <Navbar id='navbar' collapseOnSelect expand="lg"  variant="dark">
  <h4 className='netflix' href="#home">NetFlix</h4>
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Tv Shows</Nav.Link>
      <Nav.Link href="#deets">Movies</Nav.Link>
      <Nav.Link href="#deets">Recently Added</Nav.Link>
    </Nav>
    <Nav>
        <FormControl
            value={this.props.search}
            placeholder='search'
            onChange={(e)=>this.props.onSearchMovie(e)}
        />
        <Nav.Link href='#children'>Children</Nav.Link>
        <Nav.Link href='#bell'><BsBell/></Nav.Link>
        <NavDropdown titile={<MdFace/>}></NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
     );
    }
}
 
export default Navigation;
