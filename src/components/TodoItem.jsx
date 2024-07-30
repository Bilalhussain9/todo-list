import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemStore } from "../store/TodoItemStore";
const TodoItem=({index,todoname,tododate})=>{
let {DeleteItems}=useContext(TodoItemStore)
return <>
     <div className="row justify-content-center m-2">
     <div className="col-3">
        {todoname}
      </div>
      <div className="col-2">
        {tododate}
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-danger" onClick={()=>DeleteItems(index)}><MdDelete /></button>
      </div>
     </div>
</>
}
export default TodoItem;