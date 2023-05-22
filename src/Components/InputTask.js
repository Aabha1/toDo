import React, { useState } from "react";
import DisplayTask from "./DisplayTask";

function InputTask() {
  const [Tasks, setTasks] = useState([
    { id: "c", name: "Make your bed" },
    { id: "b", name: "Make breakfast" },
    { id: "a", name: "Do exercise" },
  ]);
  const [newTask, setNewTask] = useState({ id: 0, name: "" });

  const DeleteTask = (id) => {
    const newTasks = Tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  const handleSubmit = (e) => {
    //console.log(newTask.name);
    if (newTask.name !== "") setTasks([...Tasks, newTask]);
    setNewTask({ id: 0, name: "" });
    e.preventDefault();
    e.target.reset();
  };

  const changeHandler = (e) => {
    //console.log(e.target.value);
    setNewTask({ id: Tasks.length + "a", name: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">
          <h2>Enter new task : </h2>
        </label>
        <textarea
          type="text"
          id="task"
          name="task"
          value={newTask.name}
          onChange={changeHandler}
        ></textarea>
        <button type="submit">Add this task</button>
      </form>
      {/* <div>
        <h2>Your task are listed below:</h2>
        <ul>
          {Tasks.map((task) => (
            <li key={task.id}>
              {task.name} -{" "}
              <button onClick={() => DeleteTask(task.id)}>Task Done</button>
            </li>
          ))}
        </ul>
      </div> */}
      <DisplayTask Tasks={Tasks} DeleteTask={DeleteTask} />
    </div>
  );
}

export default InputTask;
