import axios from 'axios';

const KEY = 'AIzaSyD8fuDTrIW3bCnzPLaAXbr0ubizdmazoUM';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      maxResults: 5,
      part: 'snippet',
      key: KEY
    }
});
