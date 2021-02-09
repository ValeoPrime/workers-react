import React, { useState } from "react";
import "./addWorker.css";

const AddWorker = ({ addWorker }) => {
  const [value, setValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (value.trim()) {
      addWorker(value);
      setValue("");
    }
  }

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <p>Add worker</p>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddWorker;
