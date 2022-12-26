import React from 'react';
import GlossaryItem from './GlossaryItem';

const Glossary = ({ words, query, fetchGlossary }) => {
	return (
		<div className="glossary">
			<h2>Glossary</h2>
			<ul>
				{ words.length ? words.map(term => <GlossaryItem word={term} words={words} key={term._id} fetchGlossary={fetchGlossary} />) : <GlossaryItem /> }
			</ul>
		</div>
	)
};

export default Glossary;