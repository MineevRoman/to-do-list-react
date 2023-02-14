import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList.js";
import "./App.css";
import TodoOptions from "./components/Todos/TodoOptions";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
      num: todos.length,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const sortNameHandler = () => {
    setTodos((prev) => {
      const sorted = [
        ...prev.sort((a, b) => {
          if (a.text > b.text) return 1;
          if (a.text < b.text) return -1;
          return 0;
        }),
      ];
      return sorted;
    });
  };
  const sortAutoHandler = () => {
    setTodos((prev) => {
      const sorted = [...prev.sort((a, b) => a.num - b.num)];
      return sorted;
    });
  };

  const sortComleteHandler = () => {
    setTodos((prev) => {
      const sorted = [
        ...prev.sort((a, b) => {
          if (a.isCompleted === b.isCompleted) return 0;
          if (a.isCompleted) return 1;
          if (b.isCompleted) return -1;
        }),
      ];
      return sorted;
    });
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const clearTodos = () => setTodos([]);

  const leftTodos = todos.filter((todo) => !todo.isCompleted).length;

  const reversTodo = () => {
    setTodos([...todos.reverse()]);
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoForm addTodo={addTodoHandler} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!todos.length && (
        <TodoOptions
          leftTodos={leftTodos}
          sortAuto={sortAutoHandler}
          sortName={sortNameHandler}
          sortComplete={sortComleteHandler}
          clearComplete={clearCompleted}
          clearTodos={clearTodos}
          reversTodo={reversTodo}
        />
      )}
    </div>
  );
}

export default App;
