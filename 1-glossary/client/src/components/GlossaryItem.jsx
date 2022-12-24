import React from 'react';

// =============================================
//                  TO-DOs:
// 	onEdit function to update existing items
// 		onDelete function to delete from db
// =============================================
const GlossaryItem = ({ word }) => {

	const deleteWord = () => {
		console.log('inside glossary item delete func');
	};

	return (
		<div className="glossary-item">
			<li>{word.name}: <span>{word.definition}</span></li>
			<button>Edit</button>
			<button onClick={deleteWord}>Delete</button>
		</div>
	)
};

export default GlossaryItem;