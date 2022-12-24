import React from 'react';
import axios from 'axios';

// =============================================
//                  TO-DOs:
// 	onEdit function to update existing items
// 		onDelete function to delete from db
// Add word type to glossary item (noun, adj, etc)
// =============================================
const GlossaryItem = ({ word }) => {

	const deleteWord = (e) => {
		console.log('inside glossary item delete func');
		// document.getElementById("searchFormInput").value = '';
		axios.post(`/delete/${word._id}`);
	};

	return (
		<div className="glossary-item flex-parent">
			<li><span>{word.name}</span>: {word.definition}</li>
			<div>
				<button>Edit</button>
				<button onClick={deleteWord}>Delete</button>
			</div>
		</div>
	)
};

export default GlossaryItem;