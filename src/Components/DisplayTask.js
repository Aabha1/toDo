import React, { useState } from "react";

function DisplayTask() {
  const [Tasks, setTasks] = useState([
    { id: 1, name: "Make your bed" },
    { id: 2, name: "Make breakfast" },
    { id: 3, name: "Do exercise" },
  ]);

  const DeleteTask = (id) => {
    const newTasks = Tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  return (
    <div>
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
