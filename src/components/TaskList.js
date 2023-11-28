import React, {useState} from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((taskObject, index) => {
        return <Task 
        key={index}
        {...taskObject} 
        handleDelete={handleDelete}
        taskIndex={index} />
      })}
    </div>
  );
}

export default TaskList;
