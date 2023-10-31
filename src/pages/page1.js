export default function TodoList({ todos, activeTab, deleteTodo, editDone, editTodo }) {
  const filteredTodos =
    activeTab === "All"
      ? todos
      : activeTab === "Active"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  return (
    <>
      {filteredTodos.length > 0 ? (
        <ul className="todo-list">
          {filteredTodos.map((entry, index) => (
            <div
              className={`todo ${entry.completed ? "completed" : ""}`}
              key={index}
            >
              {entry.completed ? (
                <li>
                  <s>{entry.text}</s>
                </li>
              ) : (
                <li>{entry.text}</li>
              )}
              {activeTab === "Active" && (
                <>
                  <button className="btn" onClick={() => editTodo(entry.text, prompt("Edit task:", entry.text))}>
                    Edit
                  </button>
                  <button className="btn" onClick={() => editDone(entry.text)}>
                    Done
                  </button>
                </>
              )}
              {activeTab === "All" && (
                <button className="btn" onClick={() => deleteTodo(entry.text)}>
                  Delete
                </button>
              )}
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Нет задач</p>
        </div>
      )}
    </>
  );
}