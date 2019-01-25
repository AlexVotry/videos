import React, { Component } from 'react';
import youtube from '../api/youTube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.getSearchTerm('buildings');
  }

  getSearchTerm = async (term) => {
    const response = await youtube.get('/search',
    { params: { q: term } });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (vid) => {
    this.setState({ selectedVideo: vid})
  }

  render() {
    return (
      <div className="App ui container">
        <SearchBar onFormSubmit={this.getSearchTerm}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
