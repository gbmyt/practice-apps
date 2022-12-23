import React from 'react';
import GlossaryItem from './GlossaryItem';

// To-Do: Dynamically Render GlossaryItems (instead of one-by-one)
const Glossary = () => {
	return (
		<div className="glossary">
			<h2>Glossary</h2>
			<ul>
				<GlossaryItem/>
				<GlossaryItem/>
				<GlossaryItem/>
				<GlossaryItem/>
				<GlossaryItem/>
			</ul>
		</div>
	)
};

export default Glossary;