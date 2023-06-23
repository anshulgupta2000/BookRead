import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from './Components/Logo/Logo';
import Nav from './Components/Nav bar/Nav';
import Pagination from './Components/Pagination/Pagination';
import Search from './Components/Search/Search';
import "./App.css";
// import  from './components/Books';


let API = 'http://hn.algolia.com/api/v1/search?';

export default function App() {
  const [query, setQuery] = useState('');
  const [searchApplied, setSearchApplied] = useState(false);
  const [nbPages, setNbPages] = useState(0);
  const [page, setPage] = useState(0);
  const [hits, setHits] = useState([]);
  const [count, setCount] = useState(20);

  const fetchApiData = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      setHits(data.hits);
      setNbPages(data.nbPages);
    } catch (error) {
      console.log(error);
    }
  };

  const bookPost = (searchQuery) => {
    setQuery(searchQuery);
  };

  const handelSearch = (e) => {
    e.preventDefault();
    setSearchApplied(true);
    fetchApiData(`${API}query=${query}&page=${page}&hitsPerPage=${count}`);
    bookPost(query);
  };

  const ClearSearch = () => {
    setSearchApplied(false);
    bookPost('');
  };

  const decPage = () => {
    let pageNum = page - 1;
    if (pageNum < 0) {
      pageNum = 0;
    }
    setPage(pageNum);
  };

  const inPage = () => {
    let pageNum = page + 1;
    if (pageNum >= nbPages) {
      pageNum = 0;
    }
    setPage(pageNum);
  };

  useEffect(() => {
    const url = searchApplied
      ? `${API}query=${query}&page=${page}&hitsPerPage=${count}`
      : `${API}page=${page}`;

    fetchApiData(url);
  }, [page, searchApplied, count]);

  return (
    <>
    <Logo/>
      
      <Search
        query={query}
        bookPost={bookPost}
        handelSearch={handelSearch}
        ClearSearch={ClearSearch}
      />
       <Nav hits={hits} query={query} /> 
      <Pagination
        page={page}
        nbPages={nbPages}
        decPage={decPage}
        inPage={inPage}
        count={count}
        setCount={setCount}
      />
    </>
  );
}