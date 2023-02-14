import { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoOptions.module.css";

const TodoOptions = ({
  leftTodos,
  sortName,
  sortAuto,
  sortComplete,
  clearComplete,
  clearTodos,
  reversTodo,
}) => {
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
          handler={sortAuto}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          reversTodo={reversTodo}
        >
          Auto
        </Button>
        <Button
          name="name"
          handler={sortName}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          reversTodo={reversTodo}
        >
          Name
        </Button>
        <Button
          name="complete"
          handler={sortComplete}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          reversTodo={reversTodo}
        >
          Complete
        </Button>
      </div>
      <div className={styles.clearButtons}>
        <Button handler={clearComplete}>Clear complited</Button>
        <Button handler={clearTodos}>Clear all</Button>
      </div>
    </div>
  );
};

export default TodoOptions;
