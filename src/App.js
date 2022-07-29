// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

import SearchBar from './components/SearchForm';
import RenderTable from './components/Table';
import Paginate from './components/Pagination';

// import {searchKeyword, searchGender} from './helpers/search';

const TOTAL_PER_PAGE = 10;
const NUMBER_OF_QUERIES = 30;
// const url = 'https://randomuser.me/api/?results='+NUMBER_OF_QUERIES;

function App() {
  const[tables, setTables] = useState([]);
  const[loading, setLoading] = useState(true);
  const[page, setPage] = useState(1);
  // const[errorMsg, setErrorMsg] = useState(null);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const [url, setUrl] = useState('https://randomuser.me/api/?results='+NUMBER_OF_QUERIES);

  const fetchData = (u) => {
    fetch(u)
      .then(resp => resp.json())
      .then(respJson => {
        setTables(respJson.results);
        setLoading(false);
      });
  }

  const getSearchResult = (t) => {
    // console.log(url + eUrl)
    fetchData(url);
    setTables(t);
  }

  const paginate = (pageNum) => { 
    setPage(pageNum); 
  }

  const mutateUrl = (eUrl="") => {
    if(eUrl === "reset") { 
      setUrl('https://randomuser.me/api/?results='+NUMBER_OF_QUERIES);
      fetchData(url);
    } else { 
      setUrl(url + eUrl);
      fetchData(url);
    }
  }

  const handleSorting = (sortField, sortOrder) => {
    console.log(sortField, sortOrder);
    mutateUrl("&sortBy=" + sortField + "&sortOrder" + sortOrder);
   };

  const handleSortingChange = (accessor) => {
    console.log(accessor);
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
   };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="container">
        <SearchBar 
          modifyTable={getSearchResult} 
          content={tables}
          modifyUrl={mutateUrl}></SearchBar>
        {loading 
          ? <span>Loading...</span> 
          : <RenderTable 
                sortTable={handleSortingChange}
                content={tables.slice(page*TOTAL_PER_PAGE - TOTAL_PER_PAGE, page*TOTAL_PER_PAGE)}></RenderTable>}
        <Paginate
          perPage={TOTAL_PER_PAGE}
          totalElem={NUMBER_OF_QUERIES}
          paginate={paginate}></Paginate>
    </div>
  );
}

export default App;
//perPage, totalElem, paginate
/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
