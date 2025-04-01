
import { useState } from "react";
import './Todolist.css'
function TodoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk a dog"]);
    const [newTask, setNewTask] = useState("");
    const [completedTasks, setCompletedTasks] = useState({});

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteItem(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    
    function checkbox(index) {
        setCompletedTasks(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    }

    return (
        <div className="to-do-list">
            <h1>TO-DO LIST</h1>
            <div>
                <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className={`text ${completedTasks[index] ? "completed" : ""}`}>{task}</span>
                        <button className="delete-button" onClick={() => deleteItem(index)}>Delete</button>
                        <input type="checkbox"  onChange={()=>checkbox(index)}checked={completedTasks[index]||false}/>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;



