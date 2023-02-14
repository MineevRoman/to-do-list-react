import styles from "./TodoForm.module.css";
import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  function onSubmitHendler(e) {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHendler}>
        <input
          type="text"
          placeholder="New todo"
          className={styles.todoInput}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className={styles.addButton}
          type="add"
          title="Add"
          disabled={!text}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
