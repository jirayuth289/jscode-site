import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    imageUrl : ""
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/random?api_key=34722d72306c4398aea1df91176f1991')
    .then(res => res.json() )
    .then(json => json.data.image_url)
    .then( (imageUrl) => {
      this.setState({
        imageUrl: imageUrl
      })
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            <a className="rainbow" href="http://jsubu.xyz">#Jirayuth Sing-ngam</a>
          </h2>
        </div>
        <img src={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
