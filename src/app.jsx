import { Component } from 'react';
import './app.css';
import Navibar from './components/navibar';
import VideoLists from './components/videoLists';

class App extends Component {
  state = {
    items: [],
    load: false,
  };

  getMostPopular = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCCPR5nutGPOeVn0yiIVM4TBKfqwnojTZ4&part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyCCPR5nutGPOeVn0yiIVM4TBKfqwnojTZ4`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ items: result.items, load: true });
      })
      .catch((error) => {
        this.setState({ load: false });
        console.log('error', error);
      });
  };

  getSearchVideo = (name) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCCPR5nutGPOeVn0yiIVM4TBKfqwnojTZ4&part=snippet&maxResults=25&q=${name}&key=AIzaSyCCPR5nutGPOeVn0yiIVM4TBKfqwnojTZ4`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ items: result.items, load: true });
      })
      .catch((error) => console.log('error', error));
  };

  componentDidMount() {
    this.getMostPopular();
  }

  handleAdd = (name) => {
    this.getSearchVideo(name);
  };

  render() {
    const { load, items } = this.state;
    if (load === true) {
      return (
        <>
          <Navibar onAdd={this.handleAdd} />
          <VideoLists items={items} />
        </>
      );
    } else {
      return <div>loading</div>;
    }
  }
}

export default App;
