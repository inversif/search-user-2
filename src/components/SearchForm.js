import React, { useState } from 'react';
import {searchKeyword, searchGender} from '../helpers/search';

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [genderQuery, setGenderQuery] = useState("");

    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleGenderQuery = (e) => {
        console.log(e.target.value)
        setGenderQuery(e.target.value);
        console.log(genderQuery);
        props.content = searchGender(props.content, genderQuery);
        // resetGenderQuery();
    }

    const resetSearchQuery = (e) => {
        setSearchQuery("");
    }

    // const resetGenderQuery = (e) => {
    //     setGenderQuery("");
    // }

    const querySearch = (e) => {
        e.preventDefault();
        searchKeyword(props.content, searchQuery);
        resetSearchQuery();
    }

    return (
        <form className='search-query'>
            <div>
                <label>Search</label>
                <input name="keyword-search" id="keyword-search" className=""
                        value={searchQuery}
                        onChange={handleSearchQuery}
                        type="text"></input>
                <button onClick={querySearch} type="submit">Search</button>
            </div>
            <div>
                <label>Gender</label>
                <select name="gender-search" id="gender-search" className=""
                        defaultValue={""}
                        onChange={handleGenderQuery}>
                    <option value="">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        </form>
    );
};

export default SearchBar