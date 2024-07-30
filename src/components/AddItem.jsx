import { useContext, useRef, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TodoItemStore } from "../store/TodoItemStore";
 const AddItem=()=>{
    let name=useRef();
    let date=useRef();
    let {NewitemAdd}=useContext(TodoItemStore)

    let datahandle=(event)=>{
        // console.log(event);
         event.preventDefault();
         const todoname=name.current.value;
         const tododate=date.current.value;
         name.current.value="";
         date.current.value="";

        if(name !=="" && date!==""){
            NewitemAdd(todoname ,tododate);

        } 
    } 



    return<form className="row justify-content-center" onSubmit={datahandle}>
    
    <div className="col-6">
        <input type="text" placeholder="enter todo-list"
          ref={name}  className=""/>
    </div>
    <div className="col-2">
        <input type="date"    ref={date}  />
    </div>
    <div className="col-2">
    <button  className="btn btn-primary" ><IoIosAddCircleOutline /></button>
    </div>
    </form>
 }
 export default AddItem;