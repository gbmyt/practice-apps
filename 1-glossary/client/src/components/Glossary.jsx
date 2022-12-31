import React from 'react';
import GlossaryItem from './GlossaryItem';

const Glossary = ({ words, fetchGlossary }) => {
	if (words.length) {
		return (
			<div className="glossary">
				<h2>Glossary</h2>
				<ul>
					{words.map(term => <GlossaryItem
						word={term}
						words={words}
						key={term._id}
						fetchGlossary={fetchGlossary}
					/>)}
				</ul>
			</div>
		)
	} else {
		return (
			<h3 id="search-msg" className='glossary-item'>Whoops! I don't recognize that word, please adjust your search try again.</h3>
		)
	}

};

export default Glossary;