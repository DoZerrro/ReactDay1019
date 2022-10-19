import React from 'react';

function TodoList({todos, todoDetail}) {

    const clickHandler = (tno) => {
        todoDetail(tno)
    }

    return (
        <div>
            {
                todos.map(({tno, title, content, complete}) => {
                    return (
                        <li key={tno}onClick={ () => {clickHandler(tno)}}>
                            {title} &nbsp;
                            {content} &nbsp;
                            {complete ? 'FINISHED' : 'NOT YET'}
                        </li>
                    )
                })
            }
        </div>
    );
}

export default TodoList;