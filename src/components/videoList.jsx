import React, { Component } from 'react';

class VideoList extends Component {
  render() {
    const { item } = this.props;
    return (
      <li className='video__list'>
        <img
          className='video__thumbnail'
          src={item.snippet.thumbnails.medium.url}
          alt={item.snippet.title}
        />
        <div className='video__title'>
          <h3 className='title__main'>{item.snippet.title}</h3>
          <span className='title__channel'>{item.snippet.channelTitle}</span>
        </div>
      </li>
    );
  }
}

export default VideoList;
