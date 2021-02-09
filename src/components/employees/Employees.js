import React, { useState, useEffect } from "react";
import "./employees.css";
import Header from "./../header/Header";
import Worker from "./../worker/Worker";
import AddWorker from "../addWorker/AddWorker";

const Employees = () => {
  const [workers, setWorkers] = useState([]);

  function addWorker(fName) {
    const workerObj = {
      first_name: fName,
      id: Math.random(),
    };
    console.log(workerObj);
    setWorkers(workers.concat([workerObj]));
  }

  function deleteWorker(id) {
    setWorkers(workers.filter((worker) => worker.id !== +id));
  }

  useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=12")
      .then((response) => response.json())
      .then((data) => setWorkers(data.data));
  }, []);

  return (
    <div className="employees">
      <Header />
      <AddWorker addWorker={addWorker} />
      <div className="employees__wrapper">
        <ul>
          {workers.map((worker) => {
            return (
              <Worker
                worker={worker}
                key={worker.id}
                deleteWorker={deleteWorker}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Employees;
