import './App.css';
import {useState, useEffect} from 'react'
//Components
import Header from './components/header/header';
import MainInput from './components/main-input/main-input';
import ToDoContainer from './components/todo-container/todo-container';
//Hooks
import { useSort } from './hooks/useSort';
import { useStorage } from './hooks/useStorage';


function App() {
  
  const [inputText, setInputText] = useState("");
  
  //Storage system and ToDos states
  let {todos, setTodos} = useStorage()

  //Sorting
  let {sort, setSort, filteredTodo} = useSort(todos)

  return (
    <div className='App'>
        <Header title="Lista de tareas"></Header>

        <MainInput todos={todos} 
                   setTodos={setTodos} 
                   inputText={inputText}
                   setInputText={setInputText}
                   sort={sort}
                   setSort={setSort}>          
        </MainInput>

        <ToDoContainer todos={filteredTodo}
                       setTodos={setTodos}>
        </ToDoContainer>
    </div>
  );
}

export default App;
