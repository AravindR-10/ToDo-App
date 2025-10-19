"use client";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <main className="container">
      <div className="todo-box">
        <h1 className="title">📝 To-Do List</h1>

        <div className="input-row">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="task-input"
          />
          <button onClick={addTask} className="add-btn">Add</button>
        </div>

        {todos.length === 0 ? (
          <p className="no-task">No tasks yet.</p>
        ) : (
          <ul className="task-list">
            {todos.map((t, i) => (
              <li key={i} className="task-item">
                <span>{t}</span>
                <button onClick={() => deleteTask(i)} className="delete-btn">✕</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
