import React from 'react';

// 							TO-DOs:
// Render glossary items
// onEdit function to update existing items
// onDelete function to delete from db
// remove strong/em tags and add to css stylesheet

const GlossaryItem = (props) => {
	return (
		<div className="glossary">
				<li><strong>{props.name || 'Default Name'}</strong>: <em>{props.definition || 'Default Definition'}</em></li>
				<button>Edit</button>
				<button>Delete</button>
		</div>
	// 	<div className="glossary">
	// 		<li>Glossary Item</li>
	// 		<button>Edit</button>
	// 		<button>Delete</button>
	// </div>
	)
};

export default GlossaryItem;