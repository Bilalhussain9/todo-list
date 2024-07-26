import TodoItem from "./TodoItem"
const TodoItems=({sametododata, deledatafromarry})=>{
    return<>
       {
         sametododata.map((item ,index)=>
         <TodoItem key={index} index={index}  todoname={item.name} tododate={item.date} deledatafromarry={deledatafromarry}></TodoItem>   

         )
       }
    </>
}
export default TodoItems;