import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className=" flex justify-center py-8 text-2xl font-bold">Todos</div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
