import React, { useState } from 'react'

function ToDoList () {
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] =useState("");

    function handleTextChange(event) {
        setNewTask(event.target.value);
    }
    function insertTask(){

    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown (index) {

    }

    return (
    <><div className="to-do-list">
            <h1>Todo List</h1>
        </div>
        <div>
            <input
            type="text"
            placeholder="Write task here"
            value={newTask}
            onChange={handleTextChange}/>
             <button className="btnOne"
             onClick={insertTask}
             >

            </button>
            </div>
            </>
    )
}

export default ToDoList