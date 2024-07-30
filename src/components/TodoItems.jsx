import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemStore } from "../store/TodoItemStore";
const TodoItems = () => {

  const {datafrominput } = useContext(TodoItemStore);

  return (
    <>
      {datafrominput.map((item, index) => (
        <TodoItem
          key={index}
          index={index}
          todoname={item.name}
          tododate={item.date}
          
        ></TodoItem>
      ))}
    </>
  );
};
export default TodoItems;
