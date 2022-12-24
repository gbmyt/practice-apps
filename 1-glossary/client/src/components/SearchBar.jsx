import React from 'react';
import axios from 'axios';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = React.useState('');

	const setTerm = (e) => {
		setSearchTerm(e.target.value);
	};

	// ==================================================================
	//   TO-DO: Searching a term should filter existing glossary list
	// ==================================================================
	const search = async (e) => {
		e.preventDefault();
		console.log('Searching:', searchTerm);
		setSearchTerm('');
		await axios.get(`/${searchTerm}`);
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
					value={searchTerm}
					onChange={setTerm}
				/>
			<button type="submit" onClick={search}>Search</button>
			</form>
		</div>
	)
};

export default SearchBar;