import React from 'react';

function TodoRead({target}) {

    if(target == null) {
        return <></>
    }

    const {tno, title, content, complete} = target

    return (
        <div>
            <h2>{tno}</h2>
            <h2>{title}</h2>
            <h2>{content}</h2>
            <h2>{complete ? "FINISHED" : "NOT YET"}</h2>
        </div>
    );
}

export default TodoRead;