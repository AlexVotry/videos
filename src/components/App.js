import React, { Component } from 'react';
import youtube from '../api/youTube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends Component {
  state = { videos: [] }

  getSearchTerm = async (term) => {
    const response = await youtube.get('/search',
    { params: { q: term } });

    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className="App ui container">
        <SearchBar onFormSubmit={this.getSearchTerm}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
