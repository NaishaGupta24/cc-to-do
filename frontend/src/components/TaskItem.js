import React from "react";
import axios from "axios";

function TaskItem({ task }) {
  const deleteTask = async () => {
    await axios.delete(
      `http://localhost:5000/api/tasks/${task._id}`
    );

    window.location.reload();
  };

  const markCompleted = async () => {
    await axios.put(
      `http://localhost:5000/api/tasks/${task._id}`,
      {
        status: "Completed",
      }
    );

    window.location.reload();
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>Status: {task.status}</p>

      <button onClick={markCompleted}>
        Complete
      </button>

      <button onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;