
import './App.css';
import Carousel from 'react-elastic-carousel'
import Movie from './components/Movie'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import ShowDetails from './components/ShowDetails';
import MovieSingle from './components/MovieSingle';
import TvShows from './components/TvShows';


class App extends Component {
state = {
  search:'home alone'
}
onSearchMovie=(e)=>{
   this.setState({search:e.target.value})
}
render(){
  return (
    <div className="App">
    <Router>
      <Navigation onSearchMovie={this.onSearchMovie} search={this.state.search}/>
      <Route path='/tvShows' render={(routerProps)=><TvShows series='the office' {...routerProps}/>}/>
      <Route path='/' exact render={(routerProps)=><h4>Trending Now</h4>}/>
        <Route path='/' exact render={(routerProps)=> <Carousel>
          <Movie {...routerProps} movieData={this.state.search}/>
          <Movie {...routerProps} movieData={this.state.search}/>
          <Movie {...routerProps} movieData={this.state.search}/>
          <Movie {...routerProps} movieData={this.state.search}/>
          <Movie {...routerProps} movieData={this.state.search}/>
          </Carousel>}/>
         <Route path='/' exact render={(routerProps)=><h4>Watch It Again</h4>}/>
        <Route path='/' exact render={(routerProps)=> <Carousel> 
          <Movie {...routerProps} movieData="Spider man" />
          <Movie {...routerProps} movieData="Spider man" />
          <Movie {...routerProps} movieData="Spider man" />
          <Movie {...routerProps} movieData="Spider man" />
          <Movie {...routerProps} movieData="Spider man" />
          </Carousel>}/>  
          <Route path='/' exact render={(routerProps)=><h4>New Releases</h4>}/> 
        <Route path='/' exact render={(routerProps)=> <Carousel>
          <Movie {...routerProps} movieData="Spider man" />
          <Movie {...routerProps} movieData="Spider man" />
          <Movie {...routerProps} movieData="Spider man" />
          <Movie {...routerProps} movieData="Spider man" />
          <Movie {...routerProps} movieData="Spider man" />
          </Carousel>}/>
        <Route path='/details/:movieID' render={(routerProps)=><ShowDetails {...routerProps}/>}/>
       <Footer/>
    </Router>
    </div>
  );
 }
}

export default App;
