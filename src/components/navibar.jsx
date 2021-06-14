import React, { Component } from 'react';
import './navibar.css';
import Search from './search';

class Navibar extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <nav className='navi'>
        <h1 className='logo'>
          <i className='fab fa-youtube logo__iamge'></i>
          <span className='logo__name'>YouTube</span>
        </h1>
        <Search onAdd={this.handleAdd} />
      </nav>
    );
  }
}

export default Navibar;
