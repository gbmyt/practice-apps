import React from "react";
import axios from "axios";

// =============================================
//                  TO-DOs:
// 	onEdit function to update existing items
// Add word type to glossary item (noun, adj, etc)
// =============================================
const GlossaryItem = ({ word }) => {

  const deleteWord = async () => {
    await axios.post(`/delete/${word._id}`);
  };

  const updateWord = async () => {
    console.log("Inside Update Func");
    // await axios.post(`/update/${word._id}`);
  };

  return (
    <div className="glossary-item flex-parent">
      <li>
        <span className="bold">{ word ? word.name : 'Default Name' }</span>: { word ? word.definition : 'Default Definition' }
        <br />
        <div className="example">{ word ? word.example : 'Example Sentence Here.' }</div>
      </li>
      <div>
        <button onClick={updateWord}>Edit</button>
        <button onClick={deleteWord}>Delete</button>
      </div>
    </div>
  );
};

export default GlossaryItem;
