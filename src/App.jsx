
import AddItem from "./components/AddItem";
import TodoItems from "./components/TodoItems";
import ErorrMess from "./components/ErorrMess";
import Todoitemconextprovider from "./store/TodoItemStore";

function App() {

  return (
    <Todoitemconextprovider>
      <div className="row text-center p-5 justify-content-center">
        <div className="col-10 border ">
          <h1>Todo App</h1>
          <AddItem></AddItem>
          <ErorrMess></ErorrMess>
          <TodoItems></TodoItems>
        </div>
      </div>
      </Todoitemconextprovider>
  );
}

export default App;
