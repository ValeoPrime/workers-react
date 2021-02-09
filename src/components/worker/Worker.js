import React from "react";
import "./worker.css";

const Worker = ({ worker, deleteWorker }) => {
  return (
    <li>
      {worker.first_name}
      <button
        id={worker.id}
        onClick={(e) => {
          deleteWorker(e.target.id);
        }}
      >
        Х
      </button>
    </li>
  );
};

export default Worker;
