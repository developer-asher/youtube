import React, { Component } from 'react';
import VideoList from './videoList';
import './videoLists.css';

class VideoLists extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul className='videos'>
        {items.map((item) => (
          <VideoList key={item.etag} item={item} />
        ))}
      </ul>
    );
  }
}

export default VideoLists;
