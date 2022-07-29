// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

import SearchBar from './components/SearchForm';
import RenderTable from './components/Table';
import Paginate from './components/Pagination';

// import {searchKeyword, searchGender} from './helpers/search';

const TOTAL_PER_PAGE = 10;
const NUMBER_OF_QUERIES = 30;
const url = 'https://randomuser.me/api/?results='+NUMBER_OF_QUERIES;

function App() {
  const[tables, setTables] = useState([]);
  const[loading, setLoading] = useState(true);
  const[page, setPage] = useState(1);
  // const[errorMsg, setErrorMsg] = useState(null);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const getSearchResult = (t) => {
    setTables(t);
  }

  const paginate = (pageNum) => { 
    setPage(pageNum); 
  }

  const handleSorting = (sortField, sortOrder, col) => {
    if (sortField) {
     const sorted = [...tables].sort((a, b) => {
      console.log(sortField, sortOrder);
      console.log(a['login']['username'])
      // return (
      //  a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
      //   numeric: true,
      //  }) * (sortOrder === "asc" ? 1 : -1)
      // );
     });
     setTables(sorted);
    }
   };

  const handleSortingChange = (accessor, col) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder, col);
   };

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(respJson => {
        setTables(respJson.results);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
        <SearchBar modifyTable={getSearchResult} content={tables}></SearchBar>
        {loading 
          ? <span>Loading...</span> 
          : <RenderTable sortTable={handleSortingChange}
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
