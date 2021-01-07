import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Task from '../components/Task';
import "../css/Dash.css";
import { useAuth } from '../contexts/AuthContext';
import { firestoreApp } from '../firebase';
import firebase from 'firebase'; 
import { v4 as uuidv4 } from 'uuid';
import Loader from '../components/Loader';
import moment from 'moment';
import { useSnackbar } from 'react-simple-snackbar'
import { useMediaPredicate } from "react-media-hook";



export default function Dash() {
    const [tasks, setTasks] = useState()
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(""); 
    const [due, setDue] = useState(moment().format("YYYY-MM-DD"));
    const { currentUser }= useAuth()
    const preferredTheme = useMediaPredicate("(prefers-color-scheme: dark)") ? "#333" : "linear-gradient(90deg,#ff416c,#ff4b2b)";
    const snackStyles = {
        style: {
            fontFamily: 'Manrope',
            background: preferredTheme,
            borderRadius: "1rem"
        }
    }
    const [openSnackbar] = useSnackbar(snackStyles);

    const ref = firestoreApp.collection(`todos/${currentUser.uid}/tasks/`);

    function getTasks() {
        setLoading(true);
        ref
            .orderBy("due", "asc")
            .onSnapshot(querySnapshot => {
                const items = [];
                querySnapshot.forEach(doc => {
                    items.push(doc.data())
                })
            setTasks(items);
            setLoading(false);
        })
    }

    function addTask(e) {
        e.preventDefault();
        const newTask = {
          title,
          id: uuidv4(),
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          due: !due ? "" : moment(due).toDate()
        }
    
        ref
          .doc(newTask.id)
          .set(newTask)
          .catch((err) => {
            console.error(err);
          });
        
        setTitle("");
        setDue("");
    }
    function deleteTask(task) {
        ref
          .doc(task.id)
          .delete()
          .catch((err) => {
            console.error(err);
          });
        openSnackbar('Good for you! You just completed a task!')
      }

    useEffect(() => {
        getTasks();
    }, [])


    const minTime = moment().format("YYYY-MM-DD");

    const mapData = tasks && tasks.map(data => (
        <Task key={data.id} title={data.title} delete={() => deleteTask(data)} due={data.due}/>
    ))
    return (
        <>
        {loading ? <Loader/> : null}
        <Navbar user={currentUser.email} style={{display: loading && "none"}}/>
        <div className="Dash" style={{display: loading && "none"}}>
            <form className="todo-form nav-shadow" onSubmit={addTask}>
                <input id="titleinput" type="text" placeholder="Add a task" onChange={e => setTitle(e.target.value)} value={title} required style={{marginRight: "10px"}} autoComplete="off"/>
                <input type="date" min={minTime} onChange={e => setDue(e.target.value)} value={due}/>
            </form>
        <div className="tasks Container">
            {mapData}
        </div> 
        </div>
        </>
    )
}
