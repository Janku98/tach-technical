//Styles
import { useState } from 'react';
import ModalConfirmation from '../modals/modal-confirmation';
import Todo from '../todo/todo';
import './todo-container.css'


const ToDoContainer = (props:any) => {
    const {todos, setTodos} = props;

    

    return(
        <div className='todo-container'>
            <div className='dashboard'>

                {
                    todos.length > 0 && todos.map((todo:any) =>{return <Todo key={todo.id} data={todo} setTodos={setTodos} todos={todos}></Todo>})
                }

            
                {
                    todos.length === 0  && 
                    <div className="no-data-alert">
                        <p>Todavia no posee tareas a realizar, Agregue una nueva tarea con el input de arriba</p>
                    </div>
                }
                
            </div>
            
        </div>
    )
}

export default ToDoContainer;