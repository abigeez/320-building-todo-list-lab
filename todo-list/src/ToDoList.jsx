import React, { useState } from 'react'

function ToDoList () {
    const [tasks,setTasks] = useState(["Go grocery shopping","Hang out with friends at park","Watch something on tv watchlist"]);
    const [newTask,setNewTask] =useState("");

    function handleTextChange(event) {
        setNewTask(event.target.value);
    }
    function insertTask(){
        setTasks(t => [...t,newTask]);
        setNewTask("");
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
            className="placeHldr"
            type="text"
            placeholder="Write task here"
            value={newTask}
            onChange={handleTextChange}/>
             <button className="btnOne"
             onClick={insertTask}
             >
            Submit
            </button>
            </div>
            <ol>
                {tasks.map((task,index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                    className="del-btn"
                    onClick={() => delTask(index)}>
                        Delete
                    </button>
                    <button
                    className="moveDn-btn"
                    onClick={() => moveTaskDown(index)}>
                        ↓
                    </button>
                    <button
                    className="moveUp-btn"
                    onClick={() => moveTaskUp(index)}>
                        ↑
                    </button>
                  
                </li>
                )}
            </ol>
            </>
    )
}

export default ToDoList