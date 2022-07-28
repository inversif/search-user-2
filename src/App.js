// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

import SearchBar from './components/SearchForm';
import RenderTable from './components/Table';

const url = 'https://randomuser.me/api/?results=10';

function App() {
  const[tables, setTables] = useState([]);
  const[loading, setLoading] = useState(true);
  const[errorMsg, setErrorMsg] = useState(null);

  // ?inc=gender,name,nat
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(respJson => {
        setTables(respJson.results);
        setLoading(false);
      });
  }, []);

  // const search = ((val) => {
  //   setLoading(true);
  //   setErrorMsg(null);

  //   console.log('val is ',val);
  // });

  return (
    <div>
      <header>
        <SearchBar content={tables}></SearchBar>
        {loading ? <span>Loading...</span> : <RenderTable content={tables} isLoad={loading}></RenderTable>}
      </header>
    </div>
  );
}

export default App;

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
