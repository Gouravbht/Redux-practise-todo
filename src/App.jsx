import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className=" flex justify-center py-12 text-5xl font-semibold">
        Todos
      </div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
