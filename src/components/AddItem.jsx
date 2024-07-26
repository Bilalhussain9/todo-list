import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
 const AddItem=({tododata})=>{
    let [name,setname]=useState("");
    let [date,setdate]=useState("");

    let datahandle=(event)=>{
        // console.log(event);
         event.preventDefault();
        if(name !=="" && date!==""){
            tododata(name ,date);
            setname("");
            setdate("");

        } 
    } 



    return<form className="row justify-content-center" onSubmit={datahandle}>
    
    <div className="col-6">
        <input type="text" placeholder="enter todo-list" value={name} onChange={(e)=>setname(e.target.value)}  className=""/>
    </div>
    <div className="col-2">
        <input type="date"  value={date}  onChange={(e)=>setdate(e.target.value)}  />
    </div>
    <div className="col-2">
    <button  className="btn btn-primary" ><IoIosAddCircleOutline /></button>
    </div>
    </form>
 }
 export default AddItem;