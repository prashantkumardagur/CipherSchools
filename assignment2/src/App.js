import React, { useState } from 'react';
import ShowTasks from './components/showTasks';
import AddTask from './components/addTasks';
import './App.css';

function App(props) {
  const [state, setState] = useState({
    maxkey : 2,
    tasks : [{
      key : 1,
      description : 'This is my first task',
      isCompleted : false
    }]
  });

  const getIndex = (tasks, key) => tasks.map((task) => task.key).indexOf(key) ;

  const toggleCompletion = (key) => {
    let tasks = state.tasks;
    let target = getIndex(tasks, key);
    tasks[target].isCompleted = !tasks[target].isCompleted;
    setState({maxkey : state.maxkey , tasks});
  }

  const createNewTask = (data) => {
    if(!data) return;
    let tasks = state.tasks;
    tasks.push({key: state.maxkey, description: data, isCompleted : false});
    setState({maxkey : state.maxkey+1 , tasks});
  }

  const deleteTask = (key) => {
    let tasks = state.tasks;
    let target = getIndex(tasks, key);
    delete tasks[target];
    setState({maxkey : state.maxkey , tasks});
  }

  return (
    <div className='container'>
      <h1>To-Do Lists</h1>
      <AddTask newTask={createNewTask} />
      <ShowTasks taskList={state.tasks} deleteTask={deleteTask} toggleCompletion={toggleCompletion}/>
    </div>
  );
}

export default App;
