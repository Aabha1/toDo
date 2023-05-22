// import React, { useState } from "react";
import React from "react";

function DisplayTask({ Tasks, DeleteTask }) {
  // const [Tasks, setTasks] = useState([
  //   { id: 1, name: "Make your bed" },
  //   { id: 2, name: "Make breakfast" },
  //   { id: 3, name: "Do exercise" },
  // ]);

  // const DeleteTask = (id) => {
  //   const newTasks = Tasks.filter((item) => item.id !== id);
  //   setTasks(newTasks);
  // };

  return (
    <div className="display">
      <h2>Your task are listed below:</h2>
      <ul>
        {Tasks.map((task) => (
          <li key={task.id}>
            {task.name} -{" "}
            <button onClick={() => DeleteTask(task.id)}>Task Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayTask;
