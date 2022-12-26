import React, { useEffect, useState } from "react";
import axios from "axios";

// =========================================================
//	TO-DO: Add word type to glossary item (noun, adj, etc)
// =========================================================
const GlossaryItem = ({ word, words, fetchGlossary }) => {
	const [editMode, setEditMode] = useState(false);
	const [currentName, setCurrentName] = useState('');
	const [currentDef, setCurrentDef] = useState('');
	const [currentEx, setCurrentEx] = useState('');

	useEffect(() => {
		if (word) {
			setCurrentName(word.name);
			setCurrentDef(word.definition);
			setCurrentEx(word.example);
		}
	}, []);

  const deleteWord = async () => {
    await axios.post(`/delete/${word._id}`);
		fetchGlossary();
  };

  const updateWord = async (e) => {
		setEditMode(!editMode);

		if (editMode) {
			const newWord = {
				id: word._id,
				name: document.getElementById('editTermWordInput').value,
				definition: document.getElementById('editTermDefInput').value,
				example: document.getElementById('editTermExInput').value
			};

			axios.post(`/update/${word._id}`, { newWord })
			.then(() => {
				fetchGlossary();
			})
			.catch(err => {
				console.log(err);
			});
		}
  };

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'name':
				setCurrentName(e.target.value);
				break;
			case 'definition':
				setCurrentDef(e.target.value);
				break;
			case 'example':
				setCurrentEx(e.target.value);
				break;
			default:
				console.log('You didn\'t change anything');
		}
	};

  return (
    <div className="glossary-item flex-parent">
			{ !editMode ?
				(<li>
					<span className="bold">{ word.name }</span>: { word.definition}
					<br />
					<div className="example">{ word.example }</div>
				</li>) :

				(<li>
					<label htmlFor="name">Word</label>
					<input
						type="text"
						name="name"
						id="editTermWordInput"
						value={currentName}
						onChange={handleChange}
					/>

					<label htmlFor="definition">Definition</label>
					<input
						type="text"
						name="definition"
						id="editTermDefInput"
						value={currentDef}
						onChange={handleChange}
					/>

					<label htmlFor="example">Example</label>
					<input
						type="text"
						name="example"
						id="editTermExInput"
						value={currentEx}
						onChange={handleChange}
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
