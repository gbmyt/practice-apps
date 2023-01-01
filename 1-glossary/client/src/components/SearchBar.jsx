import React, { useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch, searchTerm, setSearchTerm }) => {
	const search = (e) => {
		e.preventDefault();
		onSearch();
	};

	return (
		<div className="form">
			<form id="searchForm" >
				<label htmlFor="search">Search 🔍</label>
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