import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className=" py-5  flex justify-center items-center flex-col">
        {" "}
        <h1 className=" text-lg text-gray-800 font-semibold py-2 w-fit">
          Here are your tasks
        </h1>
        {todos.map((todo) => (
          <li
            className=" bg-zinc-600 m-4 w-fit pl-10 pr-5 p-2 text-white font-medium list-none border border-black rounded-md"
            key={todo.id}
          >
            {todo.text}
            <button
              className=" ml-10 text-sm text-black   border border-red-700 rounded-md bg-red-400 p-2"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default Todos;
