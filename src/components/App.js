import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youTube';

class App extends Component {

  getSearchTerm = async (term) => {
    const videos = await youtube.get('/search',
    { params: { q: term } });
    console.log('term: ', videos.data.items);
  }

  render() {
    return (
      <div className="App ui container">
        <SearchBar onFormSubmit={this.getSearchTerm}/>
      </div>
    );
  }
}

export default App;
