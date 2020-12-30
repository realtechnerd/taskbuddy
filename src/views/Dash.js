import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Task from '../components/Task';
import "../css/Dash.css";
import { useAuth } from '../contexts/AuthContext';
import { firestore } from '../firebase';   
import { v4 as uuidv4 } from 'uuid';
import Loader from '../components/Loader';

export default function Dash() {
    const [tasks, setTasks] = useState()
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const { currentUser }= useAuth()

    const ref = firestore.collection(`todos/${currentUser.uid}/tasks/`);

    function getTasks() {
        setLoading(true);
        ref.onSnapshot(querySnapshot => {
            const items = [];
            querySnapshot.forEach(doc => {
                items.push(doc.data())
            })
            setTasks(items);
            setLoading(false)
        })
    }

    function addTask(e) {
        e.preventDefault();
        const newTask = {
          title,
          id: uuidv4()
        };
    
        ref
          .doc(newTask.id)
          .set(newTask)
          .catch((err) => {
            console.error(err);
          });
        
        setTitle("");
    }
    function deleteTask(task) {
        ref
          .doc(task.id)
          .delete()
          .catch((err) => {
            console.error(err);
          });
      }

    useEffect(() => {
        getTasks();
    }, [])

    const mapData = tasks && tasks.map(data => (
        <Task title={data.title} delete={() => deleteTask(data)}/>
    ))
    return (
        <>
        <Navbar user={currentUser.email}/>
        <div className="Dash">
            <form className="todo-form nav-shadow" onSubmit={addTask}>
                <input type="text" placeholder="Add a task" onChange={e => setTitle(e.target.value)} value={title} required/>
            </form>
        {loading ? <Loader/> : null}
        <div className="tasks Container">
            {mapData}
        </div> 
        </div>
        </>
    )
}
