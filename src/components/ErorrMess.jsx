import { useContext } from "react";
import { TodoItemStore } from "../store/TodoItemStore";

const ErorrMess = () => {
  const {datafrominput}=useContext(TodoItemStore)
   
  return( datafrominput.length === 0 && <h1>No Data</h1>);
};
export default ErorrMess;
