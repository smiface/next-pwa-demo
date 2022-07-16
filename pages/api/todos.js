import { file, saveData } from "./helpers";

export default async function handler(req, res) {
  if (req.method === "GET") {
      const data = JSON.parse(file("todos.json"));
      res.json(data);
    } 

  if (req.method === "POST") {
      const todos = JSON.parse(file("todos.json"));
      const newTodo = { id: Date.now(), title: req.body.title, done: false };
      todos.push(newTodo);
      saveData("./todos.json", todos);
      res.json(todos);
  }
  
  if (req.method === "DELETE") {
      let todos = JSON.parse(file("todos.json")).filter(
        (todo) => todo.id !== req.body.id
      );
      saveData("./todos.json", todos);
      res.json(todos);
  }

  if (req.method === "PUT") {
      const newTodo = (id, title) => {
        return { id: id, title: title };
      };
      let todos = JSON.parse(file("todos.json")).map((todo) =>
        todo.id === req.body.id ? { ...todo, done: !todo.done } : todo
      );
      saveData("./todos.json", todos);
      res.json(todos);
  }
}
