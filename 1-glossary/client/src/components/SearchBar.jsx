import React, { useEffect } from 'react';
import axios from 'axios';

// ==================================================
//										TO-DO:
// 	When searchbar loses focus either clear the form
// or bring filter back when other action is complete

//  (when you searh a term, then edit, search term
//	 	remains on "save", but glossary re-renders)
// ==================================================

const SearchBar = ({ onSearch, searchTerm, setSearchTerm }) => {
	const search = (e) => {
		e.preventDefault();
		onSearch();
	};

	return (
		<div className="form">
			<form id="searchForm" >
				<label htmlFor="search">Search <span id='search-icon'>🔍</span></label>
				<input
					type="text"
					name="search"
					id="searchFormInput"
					placeholder="Looking for something...?"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				{/* <input type='submit' className='submit-search-btn' value='🔍' onClick={search} /> */}
			</form>
		</div>
	)
};

export default SearchBar;