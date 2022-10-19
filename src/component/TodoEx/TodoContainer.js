import React, {useState} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoRead from "./TodoRead";
import useContainer from "../hook/useContainer";

function TodoContainer() {

const {todos, addTodo, todoDetail, target} = useContainer();

    return (
        <>
            <div>
                <h1>TODO</h1>
                <TodoInput addTodo={addTodo}></TodoInput>
                <TodoList todos={todos} todoDetail={todoDetail}></TodoList>
            </div>
            <hr/>
            <div>
                <TodoRead target={target}></TodoRead>
            </div>
        </>
    );
}

export default TodoContainer;