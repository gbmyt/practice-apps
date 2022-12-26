import React, { useEffect } from 'react';
import axios from 'axios';

const SearchBar = props => {
	const setTerm = (e) => {
		props.setTerm(e.target.value);
	};

	const search = (e) => {
		e.preventDefault();
		props.onSearch();
	};

	return (
		<div className="form">
			<form id="searchForm" >
				<label htmlFor="search">Search:</label>
				<input
					type="text"
					name="search"
					id="searchFormInput"
					placeholder="Type something..."
					value={props.searchTerm}
					onChange={setTerm}
				/>
			</form>
		</div>
	)
};

export default SearchBar;