import React from 'react'
import "../css/Task.css";

export default function Task(props) {
    return (
        <div className="Task" style={{display: !props.title && "none"}}>
            <h2>{props.title}</h2>
        </div>
    )
}
