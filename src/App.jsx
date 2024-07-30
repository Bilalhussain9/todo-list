import { useState } from "react";
import AddItem from "./components/AddItem";
import TodoItems from "./components/TodoItems";
import ErorrMess from "./components/ErorrMess";
import { TodoItemStore } from "./store/TodoItemStore";
function App() {
  let [datafrominput, datasho] = useState([]);

  // let newdata = (name, date) => {
  //   let datasharefrom = { name, date };
  //   // console.log(datasharefrom)
  //   datasho([...datafrominput, datasharefrom]);
  // };

  // functional update
  let NewitemAdd = (name, date) => {
    datasho((newdatafrominpu) => [...newdatafrominpu, { name, date }]);
  };
  // let deletedata=(indexdata)=>{
  //       let newdeletedata=[...datafrominput];
  //       newdeletedata.splice(indexdata,1);
  //       datasho(newdeletedata);
  // }
  let DeleteItems = (indexitem) => {
    let newdeleteitem = datafrominput.filter((item, i) => i !== indexitem);
    datasho(newdeleteitem);
  };

  return (
    <TodoItemStore.Provider
      value={{
        datafrominput: datafrominput,
        NewitemAdd: NewitemAdd,
        DeleteItems: DeleteItems,
      }}
    >
      <div className="row text-center p-5 justify-content-center">
        <div className="col-10 border ">
          <h1>Todo App</h1>
          <AddItem></AddItem>
          <ErorrMess></ErorrMess>
          <TodoItems></TodoItems>
        </div>
      </div>
    </TodoItemStore.Provider>
  );
}

export default App;
