import { BiX, BiCheck } from "react-icons/bi";
import styles from "./Todo.module.css";

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <div className={styles.todoText}>{todo.text}</div>
      <BiX className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />
      <BiCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
