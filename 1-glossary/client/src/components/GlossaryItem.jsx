import React, { useEffect, useState } from "react";
import axios from "axios";

// =============================================
//                  TO-DOs:
// 	on edit save causes updated word to display
// Add word type to glossary item (noun, adj, etc)
// =============================================
const GlossaryItem = ({ word }) => {
	const [editMode, setEditMode] = useState(false);
	const [currentWord, setCurrentWord] = useState({
		name: 'Name',
		definition: 'Definition',
		example: 'Example'
	});

  const deleteWord = async () => {
    await axios.post(`/delete/${word._id}`);
  };

	useEffect(() => {
		alert('Definition is required.');

		if (editMode) {
			const newWord = {
				id: word._id,
				name: document.getElementById('editTermWordInput').value,
				definition: document.getElementById('editTermDefInput').value,
				example: document.getElementById('editTermExInput').value
			};

			console.log('New Word:', newWord.name);
			console.log('New Def:', newWord.definition);
			console.log('New Example:', newWord.example);

			await axios.post(`/update/${word._id}`, { newWord });
		}
	}, [editMode]);

  const updateWord = async (e) => {
		setEditMode(!editMode);
  };

  return (
    <div className="glossary-item flex-parent">
			{ !editMode ?
				(<li>
					<span className="bold">{ word ? word.name : 'Default Name' }</span>: { word ? word.definition : 'Default Definition' }
					<br />
					<div className="example">{ word ? word.example : 'Example Sentence Here.' }</div>
				</li>) :

				(<li>
					<label htmlFor="name">Word</label>
					<input
						type="text"
						name="name"
						id="editTermWordInput"
						placeholder={word.name}
					/>

					<label htmlFor="definition">Definition</label>
					<input
						type="text"
						name="definition"
						id="editTermDefInput"
						placeholder={word.definition}
					/>

					<label htmlFor="example">Example</label>
					<input
						type="text"
						name="example"
						id="editTermExInput"
						placeholder={word.example}
					/>
				</li>)
			}

      <div>
				<button onClick={updateWord}>{ editMode ? 'Save' : 'Edit' }</button>
        <button onClick={deleteWord}>Delete</button>
      </div>
    </div>
  );
};

export default GlossaryItem;
