import React from 'react';
import GlossaryItem from './GlossaryItem';

const Glossary = ({ words, fetchGlossary }) => {
	if (words.length) {
		return (
			<div className="glossary">
				<h2>Glossary</h2>
				<ul>
					{words.map(term => <GlossaryItem word={term} words={words} key={term._id} fetchGlossary={fetchGlossary} />)}
				</ul>
			</div>
		)
	} else {
		return (
			<h1>Searching...</h1>
		)
	}

};

export default Glossary;