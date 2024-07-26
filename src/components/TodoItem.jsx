import { MdDelete } from "react-icons/md";
const TodoItem=({index,todoname,tododate,deledatafromarry})=>{

return <>
     <div className="row justify-content-center m-2">
     <div className="col-3">
        {todoname}
      </div>
      <div className="col-2">
        {tododate}
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-danger" onClick={()=>deledatafromarry(index)}><MdDelete /></button>
      </div>
     </div>
</>
}
export default TodoItem;