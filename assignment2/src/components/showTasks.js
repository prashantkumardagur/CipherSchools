import React from 'react';

function ShowTasks(props) {

    const remove = (e) => {
        props.deleteTask(parseInt(e.target.parentElement.dataset.num));
    }

    const complete = (e) => {
        props.toggleCompletion(parseInt(e.target.parentElement.dataset.num));
    }

    const showTask = (task) => {
        return (
            <li data-num={task.key} key={task.key} className='task'>
                <p>{task.description}</p>
                <button onClick={complete}>{task.isCompleted ? 'Incomplete': 'Completed'}</button>
                <button onClick={remove}>Delete</button>
            </li>
        )
    }

    return (
        <div className='taskList'>
            <h2>Your tasks to do</h2>
            <ul >{props.taskList.filter((task) => !task.isCompleted).map(showTask)}</ul>
            <h2>Completed tasks</h2>
            <ul>{props.taskList.filter((task) => task.isCompleted).map(showTask)}</ul>
        </div>
    )
}

export default ShowTasks;