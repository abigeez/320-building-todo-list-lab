import React, { useState } from 'react'

function ToDoList () {
    const [tasks,setTasks] = useState(["Go grocery shopping","Hang out with friends at park","Watch something on tv watchlist"]);
    const [newTask,setNewTask] =useState("");

    function handleTextChange(event) {
        setNewTask(event.target.value);
    }
    function insertTask(){

    }

    function delTask(index) {

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
            <ol>
                {tasks.map((task,index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                    className="del-btn"
                    onClick={delTask(index)}>
                        Delete
                    </button>
                </li>
                )}
            </ol>
            </>
    )
}

export default ToDoList