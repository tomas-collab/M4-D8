
import './App.css';
import Carousel from 'react-elastic-carousel'
import Movie from './components/Movie'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { Component } from 'react';


class App extends Component {
state = {
  search:'home'
}
onSearchMovie=(e)=>{
   this.setState({search:e.target.value})
}
render(){
  return (
    <div className="App">
      <Navigation onSearchMovie={this.onSearchMovie} search={this.state.search}
      />
      <h4>Trending Now</h4>
      <Carousel>
        <Movie movieData={this.state.search}/>
        <Movie movieData={this.state.search}/>
        <Movie movieData={this.state.search}/>
        <Movie movieData={this.state.search}/>
      </Carousel>
      <h4>Watch It Again</h4>
      <Carousel>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
      </Carousel>
      <h4>New Releases</h4>
      <Carousel>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
      </Carousel>
      <Footer/>

    </div>
  );
 }
}

export default App;
