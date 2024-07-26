import { useState } from "react";
import AddItem from "./components/AddItem";
import TodoItems from "./components/TodoItems";

function App() {
  let [datafrominput, datasho] = useState([]);
  
  // let newdata = (name, date) => {
  //   let datasharefrom = { name, date };
  //   // console.log(datasharefrom)
  //   datasho([...datafrominput, datasharefrom]);
  // };

  // functional update
  let newdata = (name, date) => {
    datasho((newdatafrominpu) => [...newdatafrominpu, { name, date }]);
  };
  // let deletedata=(indexdata)=>{
  //       let newdeletedata=[...datafrominput];
  //       newdeletedata.splice(indexdata,1);
  //       datasho(newdeletedata);
  // }
  let deletedata = (indexitem) => {
    let newdeleteitem = datafrominput.filter((item, i) => i !== indexitem);
    datasho(newdeleteitem);
  };

  return (
    <>
      <div className="row text-center p-5 justify-content-center    ">
        <div className="col-10 border ">
          <h1>Todo App</h1>
          <AddItem tododata={newdata}></AddItem>
          <TodoItems
            sametododata={datafrominput}
            deledatafromarry={deletedata}
          ></TodoItems>
        </div>
      </div>
    </>
  );
}

export default App;
