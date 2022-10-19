import {useState} from "react";

let tno = 0;

function useContainer() {

    const [todos, setTodos] = useState([]);

    const [target, setTarget] = useState();

    const addTodo = (todo) => {
        todo.tno = tno++;
        setTodos([...todos, todo])
    };

    // console.log(todos)

    const todoDetail = (tno) => {
        const result = todos.find(todo => todo.tno === tno);

        setTarget(result)
        //console.log(result)
    }

    return {todos, addTodo, todoDetail, target}
}

export default useContainer;