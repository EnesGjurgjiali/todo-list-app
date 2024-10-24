import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const getBackgroundColor = (priority) => {
    switch (priority) {
      case "high":
        return "#ffcccc"; 
      case "medium":
        return "#fff4cc"; 
      case "low":
        return "#ccffcc"; 
      default:
        return "#ffffff"; 
    }
  };

  return (
    <div  className={`Todo ${task.completed ? "completed" : ""}`}
    style={{
      backgroundColor: task.completed ? "#4a4a4a;" : getBackgroundColor(task.priority),
    }}>
      <p>{task.task}</p>
      <div className="todo-information">
        <p
          className={`todo-description ${showMore ? "expanded" : ""}`}
          style={{ maxHeight: showMore ? "none" : "1.6em", overflow: "hidden" }}
        >
          {task.description}
        </p>
        {task.description.length > 100 && (
          <button className="show-more-btn" onClick={handleToggleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
      <div className="icons">
        <FontAwesomeIcon
          className="completed-icon"
          icon={faCheckCircle}
          onClick={() => toggleComplete(task.id)}
        />
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
      <div className="todo-extra-informations">
        <p>Due Date: {task.dueDate}</p>
        <p>Priority: {task.priority}</p>
        <p>Category: {task.category}</p>
      </div>
    </div>
  );
};

export default Todo;
