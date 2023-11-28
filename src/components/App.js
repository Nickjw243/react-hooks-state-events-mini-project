import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selected, setSelected] = useState("All")

  const handleSelection = (category) => {
    setSelected(category)
  }

  const filteredTasks = tasks.filter(task => {
    if (selected === "All") {return true} 
    return task.category === selected
  })

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const handleDelete = (text) => {
    const newTasks = tasks.filter((task) => {
      return task.text !== text;
    });
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} handleClick={handleSelection}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewTask}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
