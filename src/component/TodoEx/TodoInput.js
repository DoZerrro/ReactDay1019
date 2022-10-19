import React, {useState} from 'react';
import useInput from "../hook/useInput";

function TodoInput({addTodo}) {

    const {todo, changeHandler, clickHandler} = useInput(addTodo);


    return (
        <div>
            <input type={'text'} name={'title'} value={todo.title} onChange={(e) => {changeHandler(e)}}/> <br/>
            <input type={'text'} name={'content'} value={todo.content} onChange={(e) => {changeHandler(e)}}/> <br/>
            <button onClick={() => {clickHandler()}}>SAVE</button>
        </div>
    );
}

export default TodoInput;