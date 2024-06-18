import React, { useState } from 'react'

function ToDoList () {
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] =useState("");

    function handleInputChange(event) {

    }
    function addTask(){

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
            type="text"/>
            </div></>
    )
}

export default ToDoList