import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodohandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodohandler} className=" flex justify-center">
      <input
        className=" px-10  text-white border border-green-700 rounded-md p-2 bg-zinc-800"
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-md font-medium bg-green-400 p-1 ml-1 rounded-md hover:bg-green-500"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
