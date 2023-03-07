//Styles
import './main-input.css'
//Components
import StyledButton from '../material-styled/button-styled';
import StyledInput from '../material-styled/input-styled';
import StyledSelect from '../material-styled/select-styled';
import { MenuItem } from '@mui/material';
import { ToDo } from '../../models/todo.interface';
import ModalError from '../modals/modal-error';
import { useState } from 'react';



const MainInput = (props:any) => {
    const  {setInputText, setTodos, inputText, todos, sort, setSort} =  props

    //Input Handler
    const inputHandler = (e:string):void => {
        setInputText(e)
    };

    //Submi Handler
    const submintHandler = (e:any):void => {
        e.preventDefault()
        let isAcopy = false;
        todos.map((t:ToDo)=>{
            if(t.text === inputText){
                isAcopy = true;
            }
        })
        if(isAcopy){
            setOpenModalHandler()
        }else {
            let newToDo:ToDo = {text:inputText, completed: false, id: Math.random() * 1000 }
            if(inputText !== ""){
                setTodos([...todos, newToDo])
                setInputText("")
            }else{
                setInputText("")
            }
        }
    }

    //Modal Handler
    const[openModal, setOpenModal] = useState<boolean>(false)
    const closeModalHandler = ():void => {
        setOpenModal(false)
    }
    const setOpenModalHandler = ():void => {
        setOpenModal(true)
    }

    return(
        <div className='main-input-container'>
            <form onSubmit={submintHandler}>
                <StyledInput 
                    placeholder='Nueva tarea...'
                    onChange={(e)=>inputHandler(e.target.value)}
                    value={inputText}>
                </StyledInput>

                <StyledButton  onClick={submintHandler} type="submit" variant="contained">Crear</StyledButton>

                <StyledSelect
                    onChange={(e)=>setSort(e.target.value)}
                    value={sort}>
                    <MenuItem value={"all"}>Todas</MenuItem>
                    <MenuItem value={"completed"}>Completadas</MenuItem>
                    <MenuItem value={"uncompleted"}>Pendientes</MenuItem>
                </StyledSelect>

            </form>
            <ModalError open={openModal} handleClose={closeModalHandler}></ModalError>
        </div>
    )
}

export default MainInput;