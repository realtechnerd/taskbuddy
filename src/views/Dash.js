import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Task from '../components/Task';
import "../css/Dash.css";
import { useAuth } from '../contexts/AuthContext';
import { firestore } from '../firebase';   
import { v4 as uuidv4 } from 'uuid';

export default function Dash() {
    const [schools, setSchools] = useState()
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const { currentUser }= useAuth()

    const ref = firestore.collection("users");  

    function getSchools() {
        ref.onSnapshot(querySnapshot => {
                const items = [];
                querySnapshot.forEach(doc => {
                    items.push(doc.data())
                })
                setSchools(items);
            })
    }

    useEffect(() => {
        getSchools();
    }, [])

    const mapData = schools && schools.map(data => (
        <Task title={data.title}/>
    ))
    return (
        <>
        <Navbar user={currentUser.email}/>
        <div className="Dash">
            <form className="todo-form nav-shadow" >
                <input type="text" placeholder="Add a task" onChange={e => setTitle(e.target.value)} value={title}/>
            </form>

        <div className="tasks Container">
            {mapData}
        </div> 
        </div>
        </>
    )
}
