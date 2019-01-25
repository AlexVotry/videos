import React, { Component } from 'react';
import youtube from '../api/youTube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends Component {
  state = { videos: [], selectedVideo: null }

  getSearchTerm = async (term) => {
    const response = await youtube.get('/search',
    { params: { q: term } });

    this.setState({ videos: response.data.items })
  }

  onVideoSelect = (vid) => {
    console.log('vid from App.js: ', vid);
    // this.setState({ selectedVideo: vid})
  }

  render() {
    return (
      <div className="App ui container">
        <SearchBar onFormSubmit={this.getSearchTerm}/>
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;
