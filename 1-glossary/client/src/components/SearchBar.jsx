import React from 'react';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = React.useState('');

	const setTerm = (e) => {
		setSearchTerm(e.target.value);
	};

	const search = (e) => {
		e.preventDefault();
		console.log('Searching:', searchTerm);
		document.getElementById("searchFormInput").value = '';
	};

	return (
		<div>
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