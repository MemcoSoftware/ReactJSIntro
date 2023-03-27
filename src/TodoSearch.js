import React from 'react';

import './cssComponents/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return (
        <input
         className="TodoSearch" 
         placeholder="Search"
         value={searchValue}
         onChange={onSearchValueChange}
         />

    );
        
        
    
}




export {TodoSearch};