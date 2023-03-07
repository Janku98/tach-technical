import { useEffect, useState } from "react";
import { ToDo } from "../models/todo.interface";


export const useSort = (todos:any) => {
    const [sort, setSort] = useState<string>("all")
    const [filteredTodo, setFilteredTodo] = useState<ToDo[]>([]);

    const filterHandler = (status:string) => {
    switch(status){
      case "all":
        setFilteredTodo(todos)
        break;
      case "completed":
        setFilteredTodo(todos.filter((todo:any)=>todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodo(todos.filter((todo:any)=>todo.completed === false))
        break;
      default:
        setFilteredTodo(todos)
        break;
    }
  }

  useEffect(()=>{
    filterHandler(sort)
  },[sort, todos])

  useEffect(()=>{},[filteredTodo])

  return {sort, setSort, filteredTodo, setFilteredTodo, }

}