import { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoOptions.module.css";

const TodoOptions = ({ leftTodos, sortTodo, clearComplete, clearTodos }) => {
  const [activeButton, setActiveButton] = useState("auto");

  return (
    <div className={styles.todoOptions}>
      <span className={styles.copletedText}>
        {!!leftTodos
          ? `${leftTodos} item${leftTodos > 1 ? "s" : ""} left`
          : "All comlete"}
      </span>
      <div className={styles.sortButtons}>
        <Button
          name="auto"
          handler={(metod) => sortTodo(metod)}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        >
          Auto
        </Button>
        <Button
          name="name"
          handler={(metod) => sortTodo(metod)}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        >
          Name
        </Button>
        <Button
          name="complete"
          handler={(metod) => sortTodo(metod)}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        >
          Complete
        </Button>
      </div>
      <div className={styles.clearButtons}>
        <Button name={"clear clmplete"} handler={(_) => clearComplete()}>
          Clear complited
        </Button>
        <Button name={"clear all"} handler={(_) => clearTodos()}>
          Clear all
        </Button>
      </div>
    </div>
  );
};

export default TodoOptions;
