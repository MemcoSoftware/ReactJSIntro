import React from 'react';
import { TodoContext } from '../TodoContext';
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import {TodoItem} from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton} from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUI(){

  const {error,
    loading,
     searchedTodos,
      completeTodos,
      openModal,
      setOpenModal,
       deleteTodo} = React.useContext(TodoContext)
    return(
        <React.Fragment>
        <TodoCounter/>
     <TodoSearch/>

        <TodoList>
        {error && <p>chill out, there was an error</p>}
        
        {loading && <p>We are loading</p>}

        {(!loading && !searchedTodos.length) && <p>Set up your first TO DO!</p>}

      {searchedTodos.map(todo => (
        <TodoItem key={todo.text}
         text={todo.text}
         completed={todo.completed}
         onComplete={()=> completeTodos(todo.text)}
         onDelete={()=> deleteTodo(todo.text)}
         
         />
      ))}
     </TodoList>
      

      {!! openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

     <CreateTodoButton 
     
     setOpenModal={setOpenModal}
     />
     
      </React.Fragment>
    );
}


export { AppUI };