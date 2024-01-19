import { useState } from "react";
import "./App.css";
import AddTodo from "./features/components/AddTodo";
import Todo from "./features/components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to redux-toolk</h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
