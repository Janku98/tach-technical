import { useState } from 'react';
import { useTodo } from '../../hooks/useTodo';
import { ToDo } from '../../models/todo.interface';
import StyledButtonComplete from '../material-styled/button-complete';
import StyledButtonDelete from '../material-styled/button-delete';
import StyledButtonEdit from '../material-styled/button-edit';
import StyledInputEdit from '../material-styled/edit-input-styled';
import ModalConfirmation from '../modals/modal-confirmation';
import './todo.css';


const Todo = (props: any) => {
    const {id, text, completed} = props.data;
    const {setTodos, todos} = props

    //Editing in ToDo Hook
    const {editing, changeText, applyEdit, editHandler, initialText, completeHandler} = useTodo(setTodos, todos, text, id, completed);

    //Delete button and modal
    const [openModal, setOpenModal]= useState<boolean>(false)
    const handleClose = ():void => {
        setOpenModal(false)
    }
    const deleteHandler = ():void => {
        setOpenModal(true)
    }
    const acceptDelete = ():void => {
        setTodos(todos.filter((t:ToDo)=> t.id !== id))
    }
    
    

    //Editing
    
    return(
        <div className={completed ? 'completed-todo' : 'todo' }>
            {!editing ? 
                <span className={completed ? 'todo-text-completed' : 'todo-text'}>{text}</span>
                 : 
                 <StyledInputEdit value={initialText} onChange={(e)=>changeText(e.target.value)}></StyledInputEdit>
            }
            <div className='todo-buttons-container'>
                <StyledButtonEdit onClick={editing? applyEdit : editHandler}>{editing ? 'Save' : 'Edit'}</StyledButtonEdit>
                <StyledButtonDelete onClick={deleteHandler}>Delete</StyledButtonDelete>
                <StyledButtonComplete onClick={completeHandler}>{completed ? 'Undo' : 'Finish' }</StyledButtonComplete>              
            </div>
            <ModalConfirmation open={openModal} handleClose={handleClose} acceptDelete={acceptDelete}></ModalConfirmation>
        </div>
    )
}

export default Todo;