import React, { useState } from 'react'

function ToDoList () {
    const [tasks,setTasks] = useState(["Go grocery shopping","Hang out with friends at park","Watch something on tv watchlist"]);
    const [newTask,setNewTask] =useState("");

    function handleTextChange(event) {
        setNewTask(event.target.value);
    }
    function insertTask(){
        if(newTask.trim()!== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }
}

    function delTask(index) {
        const modTasks = tasks.filter((_,i) => i !== index);
        setTasks(modTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const upTasks = [...tasks];
            [upTasks[index],upTasks[index - 1]] = [upTasks[index - 1], upTasks[index]];
            setTasks(upTasks);
        }
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