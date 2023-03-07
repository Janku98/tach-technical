import { useState } from "react";
import { ToDo } from "../models/todo.interface";


export const useTodo = (setTodos:any, todos:ToDo[], text:string, id:number, completed:boolean) => {

    const [initialText, setInitialText] = useState<string>(text);
    //Editing state
    const [editing, setEditing]= useState<boolean>(false);
    const changeText = (e:string)=>{
        setInitialText(e)
    }

    const applyEdit = () => {
        setTodos(todos.map((t:ToDo)=>{
            if(t.id === id){
                t.text = initialText
            }
            return t
        }))
        setEditing(false)
    }

    const editHandler = (): void => {
        setEditing(!editing)
    }

    //Finish/Undo Button
    const completeHandler = ():void => {
        setTodos(todos.map((t:ToDo)=> {
            if(t.id === id){
                if(completed){
                    t.completed = false
                }else{
                    t.completed = true
                }
            }
            return t
        }))
    }


    return {setEditing, editing, changeText, applyEdit, editHandler, initialText, completeHandler}
}