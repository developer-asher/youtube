import React from 'react';

function Search(props) {
  const inputRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <form className='search__wrap' onSubmit={handleSubmit}>
      <label htmlFor='search__bar'></label>
      <input type='text' placeholder='검색' id='search__bar' ref={inputRef} />
      <button className='search__button'>
        <i className='fas fa-search'></i>
      </button>
    </form>
  );
}

export default Search;
