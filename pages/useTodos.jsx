import axios from "axios";
import { useState, useEffect, useRef  } from "react";

export const useTodos = () => {
  const todoTitleRef = useRef(null);
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    axios.get("/api/todos").then((res) => setTodos(res.data));
  };

  const addTodo = () => {
    axios
      .post("/api/todos", { title: todoTitleRef.current.value })
      .then((res) => setTodos(res.data));
  };

  const removeTodo = (id) => {
    axios
      .delete("/api/todos/", { data: { id: id } })
      .then((res) => setTodos(res.data));
  };

  const toggleTodo = (id) => {
    axios.put("/api/todos", { id: id }).then((res) => setTodos(res.data));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return {
    todoTitleRef,
    todos,
    getTodos,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};
