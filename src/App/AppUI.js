import React from 'react';
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import {TodoItem} from '../TodoItem';
import { CreateTodoButton} from '../CreateTodoButton';

function AppUI({
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodos,
      deleteTodo,
}){
    return(
        <React.Fragment>
        <TodoCounter
        total={totalTodos}
        completed={completedTodos}
        
        />
     <TodoSearch
     searchValue={searchValue}
     setSearchValue={setSearchValue} />
     
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
     <CreateTodoButton />
     
      </React.Fragment>
    );
}


export { AppUI };