
import {  createContext } from "react";
import { useReducer } from "react";
export const TodoItemStore = createContext([]);
const todoitemreducer = (crunnttodoitem, action) => {
    let newtodoitem = crunnttodoitem;
    if (action.type === "new-item") {
      newtodoitem = [
        ...crunnttodoitem,
        {
          name: action.payload.name,
          date: action.payload.date,
        },
      ];
    } else if (action.type === "delete-item") {
      newtodoitem = crunnttodoitem.filter((item ,i) => i !== action.payload.name);
    }
    return newtodoitem;
  };

const Todoitemconextprovider=({children})=>{
    let [datafrominput, tododatasho] = useReducer(todoitemreducer, []);

  let NewitemAdd = (name, date) => {
    const newitemaction = {
      type: "new-item",
      payload: {
        name,
        date,
      },
    };
    tododatasho(newitemaction);
   
  };
  let DeleteItems = (indexitem) => {
    const deleteitemaction = {
      type: "delete-item",
      payload: {
        name: indexitem,
      },
    };
    tododatasho(deleteitemaction);
  };
  return  <TodoItemStore.Provider
  value={{
    datafrominput,
    NewitemAdd,
    DeleteItems,
  }}
>
    {children}
</TodoItemStore.Provider>
} 
export default Todoitemconextprovider;