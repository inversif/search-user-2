// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

// import SearchBar from './components/SearchForm';
import RenderTable from '../components/Table';
import Paginate from '../components/Pagination';

import {searchKeyword, searchGender} from '../helpers/search';

const TOTAL_PER_PAGE = 10;
const NUMBER_OF_QUERIES = 30;
const url = 'https://randomuser.me/api/?results='+NUMBER_OF_QUERIES;

function App() {
  const[tables, setTables] = useState([]);
  const[loading, setLoading] = useState(true);
  const[page, setPage] = useState(1);
  // const[errorMsg, setErrorMsg] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [genderQuery, setGenderQuery] = useState("");

  const handleSearchQuery = (e) => {
      setSearchQuery(e.target.value);
  }

  const handleGenderQuery = (e) => {
      setGenderQuery(e.target.value);
      setTables(searchGender(tables, genderQuery));
  }

  const resetSearchQuery = (e) => {
      setSearchQuery("");
  }

  const querySearch = (e) => {
      e.preventDefault();
      setTables(searchKeyword(tables, searchQuery));
      resetSearchQuery();
  }

  const paginate = (pageNum) => { 
    setPage(pageNum); 
  }

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
        {/* <SearchBar content={tables}></SearchBar> */}
        <form className="search-query container">
          <div className="row">
            <div className="col col-md-auto form-group">
                <div>
                  <label>Search</label>
                </div>
                <div className="d-flex">
                  <input name="keyword-search" id="keyword-search" className="search-input form-control"
                          value={searchQuery}
                          onChange={handleSearchQuery}
                          type="text"></input>
                  <button onClick={querySearch} type="submit" className="btn btn-primary">
                    <i className="bi-search"></i>
                  </button>
                </div>
            </div>
            <div className="col col-2 form-group">
                <div>
                  <label>Gender</label>
                </div>
                <div>
                  <select name="gender-search" id="gender-search" className="form-select"
                          defaultValue={""}
                          onChange={handleGenderQuery}>
                      <option value="">All</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                  </select>
                </div>
            </div>
          </div>
        </form>
        {loading 
          ? <span>Loading...</span> 
          : <RenderTable content={tables.slice(page*TOTAL_PER_PAGE - TOTAL_PER_PAGE, page*TOTAL_PER_PAGE)}></RenderTable>}
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
