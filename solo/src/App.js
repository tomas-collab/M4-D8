
import './App.css';
import Carousel from 'react-elastic-carousel'
import Movie from './components/Movie'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { Component } from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom'


class App extends Component {
state = {
  search:'home'
}
onSearchMovie=(e)=>{
   this.setState({search:e.target.value})
}
render(){
  return (
    <Router>
    <div className="App">
      <Navigation onSearchMovie={this.onSearchMovie} search={this.state.search}/>
        <Route path='/' exact render={(routerProps)=> <Carousel><Movie {...routerProps} movieData={this.state.search} title='Trending Now'/></Carousel>}/>
        <Route path='/' exact render={(routerProps)=> <Carousel><Movie {...routerProps} movieData="Spider man" title='Watch It Again'/></Carousel>}/>   
        <Route path='/' exact render={(routerProps)=> <Carousel><Movie {...routerProps} movieData="Spider man" title='New Releases'/></Carousel>}/>
      {/* <Route path='/details/:ID' component={ShowDetails}/> */}
      <Footer/>
    </div>
    </Router>
  );
 }
}

export default App;
