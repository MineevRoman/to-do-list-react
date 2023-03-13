import { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList.js";
import "./App.css";
import TodoOptions from "./components/Todos/TodoOptions";
import sortTodo from "./components/sortTodo";
import { nanoid } from "nanoid";

function App() {
  const storage = JSON.parse(localStorage.getItem("todoList"));

  const [todos, setTodos] = useState(storage);

  if (!storage || storage !== todos) {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: nanoid(6),
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

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const clearTodos = () => setTodos([]);

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
          leftTodos={todos.filter((todo) => !todo.isCompleted).length}
          sortTodo={(metod) =>
            setTodos((prev) => {
              return sortTodo(prev, metod);
            })
          }
          clearComplete={clearCompleted}
          clearTodos={clearTodos}
        />
      )}
    </div>
  );
}

export default App;
