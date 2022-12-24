import React from 'react';
import GlossaryItem from './GlossaryItem';

const Glossary = ({ words }) => {
	return (
		<div className="glossary">
			<h2>Glossary</h2>
			<ul>
				{ words.length ? words.map(term => <GlossaryItem word={term} key={term._id} />) : <></> }
			</ul>
		</div>
	)
};

export default Glossary;