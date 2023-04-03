// import logo from './logo.svg';
// import './App.css';

// import {TodoCounter} from '../TodoCounter';
// import { TodoSearch } from '../TodoSearch';
// import { TodoList } from '../TodoList';
// import {TodoItem} from '../TodoItem';
// import { CreateTodoButton} from '../CreateTodoButton';
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
// const defaultTodos =[
//   { text: 'Study', completed: false},
//   { text: 'Take reacts course', completed: true},
//   { text: 'Go to gym', completed: true},

// ];






function App() {

  


  // React.useEffect(()=>{
 


  return (
   <TodoProvider>
    <AppUI />
   </TodoProvider>
  );
  
}

export default App;
