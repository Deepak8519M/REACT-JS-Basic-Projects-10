import React from "react";
import "../style.css";
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handle = () => {
    setTodos((todos) => {
      return todos.concat({
        id: Math.floor(Math.random() * 10),
        text: input,
      });
    });
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Add your New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handle}>Submit</button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
