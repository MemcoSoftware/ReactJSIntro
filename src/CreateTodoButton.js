import React from "react";
import './cssComponents/CreateTodoButton.css'

function CreateTodoButton(props) {
    
    const onClickButton = (msg) =>{
        alert(msg)
    };
    
    return(
        <button 
        className="CreateTodoButton"
        onClick={()=> onClickButton('Here should be open the modal')}
        >
            +
            </button>
    );
};


export {CreateTodoButton};