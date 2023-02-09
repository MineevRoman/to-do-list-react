import styles from "./TodoList.module.css";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoLisContainer}>
      {!todos.length && <h2 className={styles.emptyText}>you have no tasks</h2>}
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
