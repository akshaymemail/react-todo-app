import React, { useState } from "react";

function InputArea(props) {

  function handleChange(event) {
    const newValue = event.target.value;
    props.setInputText(newValue);
  }

  function addItem() {
    props.setItems((prevItems) => {
      return [...prevItems, props.inputText];
    });
    props.setInputText("");
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={props.inputText} />
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
