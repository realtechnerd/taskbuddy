import React from 'react'
import "../css/Task.css";

export default function Task(props) {
    return (
        <div className="Task" style={{display: !props.title && "none"}} onClick={props.delete}>
            <h2>{props.title}</h2>
            <p style={{display: !props.due && "none"}}>{props.due}</p>
        </div>
    )
}
