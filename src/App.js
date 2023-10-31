import React, { useState } from "react";
import TodoList from "./pages/page1";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { text: todo, completed: false }]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    setTodos(newTodos);
  };

  const editTodo = (text, newText) => {
    const updatedTodos = todos.map((t) =>
      t.text === text ? { ...t, text: newText } : t
    );
    setTodos(updatedTodos);
  };

  const editDone = (text) => {
    const updatedTodos = todos.map((t) =>
      t.text === text ? { ...t, completed: true } : t
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>Todo App</h1>
          <div className="todo-functions">
            <input
              type="text"
              value={todo}
              placeholder="Введите задачу..."
              onChange={(e) => setTodo(e.target.value)}
            ></input>
            <button className="add-btn" onClick={addTodo}>
              Add
            </button>
          </div>
          <div className="todos-buttons">
            <button className="btn" onClick={() => setActiveTab("All")}>All</button>
            <button className="btn" onClick={() => setActiveTab("Active")}>Active</button>
            <button className="btn" onClick={() => setActiveTab("Completed")}>Completed</button>
          </div>
          <br />
          <TodoList
            todos={todos}
            activeTab={activeTab}
            deleteTodo={deleteTodo}
            editDone={editDone}
            editTodo={editTodo}
          />
        </div>
      </div>
    </>
  );
}