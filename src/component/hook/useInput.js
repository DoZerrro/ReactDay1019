import {useState} from "react";

const init = {
    tno: 0,
    title: '',
    content: '',
    complete: false
}

function useInput(addTodo) {
    const [todo, setTodo] = useState({...init});

    const changeHandler = (e) => {
        const target = e.target
        todo[target.name] = target.value

        setTodo({...todo})
        // console.log(target.name)
        // console.log(todo)
    }

    const clickHandler = () => {
        addTodo(todo)
        setTodo({...init})
    }

    return {todo, changeHandler, clickHandler};
}

export default useInput;