import React, { Component } from 'react';
import './videoLists.css';

class VideoLists extends Component {
  state = {
    load: false,
    items: [],
  };

  getMostPopular = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCCPR5nutGPOeVn0yiIVM4TBKfqwnojTZ4&part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyCCPR5nutGPOeVn0yiIVM4TBKfqwnojTZ4',
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

  componentDidMount() {
    this.getMostPopular();
  }

  render() {
    const { load, items } = this.state;
    if (load === true) {
      return (
        <ul className='videos'>
          {items.map((item) => (
            <li className='video__list' key={item.id}>
              <img
                className='video__thumbnail'
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
              />
              <p className='video__title'>
                <h3 className='title__main'>{item.snippet.title}</h3>
                <span className='title__channel'>
                  {item.snippet.channelTitle}
                </span>
              </p>
            </li>
          ))}
        </ul>
      );
    } else {
      return <div>loading</div>;
    }
  }
}

export default VideoLists;
