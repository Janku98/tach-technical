import { useEffect, useState } from "react"
import { ToDo } from "../models/todo.interface"


export const useStorage = () => {
    const [todos, setTodos]= useState<ToDo[]>([])
  

  //Get Locale Todos
  useEffect(()=>{
    if(localStorage.hasOwnProperty("todos") === false) { 
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      const locale = localStorage.getItem("todos")
      if(locale)setTodos(JSON.parse(locale))
    }
  },[])

  useEffect(()=>{
    saveToLocal()
  },[todos])

  //Save to local storage
  const saveToLocal = ():void => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  return {todos, setTodos, }
}