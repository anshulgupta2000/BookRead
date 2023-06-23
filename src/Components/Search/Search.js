import React from 'react';


export default function Search({ query, bookPost, handelSearch, ClearSearch }) {
  return (
    <div className='handel '>
      <form onSubmit={(e) => handelSearch(e, query)}>
        <input
          type='text'
          
          value={query}
          onChange={(e) => bookPost(e.target.value)}
        />
        <button type='submit'>Apply</button>
        <button onClick={ClearSearch}>Clear</button>
      </form>
    </div>
  );
}