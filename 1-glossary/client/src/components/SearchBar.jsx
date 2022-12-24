import React, { useEffect } from 'react';
import axios from 'axios';

const SearchBar = props => {
	// const [searchTerm, setSearchTerm] = React.useState('');

	const setTerm = (e) => {
		props.setTerm(e.target.value);
	};

	// ==================================================================
	//   TO-DO: Searching a term should filter existing glossary list
	// ==================================================================
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
			<button type="submit" onClick={search}>Search</button>
			</form>
		</div>
	)
};

export default SearchBar;