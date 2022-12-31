import React, { useEffect, useState } from "react";
import axios from "axios";

// =========================================================
//	TO-DO: Add word type to glossary item (noun, adj, etc)
// =========================================================
const GlossaryItem = ({ word, words, fetchGlossary }) => {
	const [editMode, setEditMode] = useState(false);
	const [currentName, setCurrentName] = useState('');
	const [currenType, setCurrentType] = useState('');
	const [currentPronunciation, setCurrentPronunciation] = useState('');
	const [currentDef, setCurrentDef] = useState('');
	const [currentEx, setCurrentEx] = useState('');

	useEffect(() => {
		if (word) {
			setCurrentName(word.name);
			setCurrentPronunciation(word.pronunciation);
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
				// type: document.getElementById('addTermTypeInput').value || '',
				pronunciation: document.getElementById('editTermPronunciationInput').value || '',
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
			case 'pronunciation':
				setCurrentPronunciation(e.target.value);
				break;
			case 'example':
				setCurrentEx(e.target.value);
				break;
			default:
				console.log('You didn\'t change anything');
		}
	};

	const wordPronunciation = <span className="pronunciation">/{ word.pronunciation }/</span>;
	const wordType =  <span className="word-type"> { word.type }</span>;

  return (
    <div className="glossary-item flex-parent">
			{ !editMode ?
				(<li>
					<div className="flex-parent">
						<h5 className="bold">{ word.name }</h5> {word.pronunciation ? wordPronunciation : <></>} { word.type? <div className='pad-sides'>|</div> : <></> } {word.type ? wordType : <></>}
					</div>


					<div>{ word.definition }</div>
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

					<label htmlFor="word-type">Type</label>
					<select id="editTermTypeInput" name="word-type">
						<option value="">Word Type</option>
						<option value="noun">noun</option>
						<option value="verb">verb</option>
						<option value="adverb">adverb</option>
						<option value="adjective">adjective</option>
					</select>

					<label htmlFor="pronunciation">Pronunciation</label>
						<input
							type="text"
							name="pronunciation"
							id="editTermPronunciationInput"
							value={currentPronunciation}
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
