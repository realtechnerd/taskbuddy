import React, { useState } from 'react'
import "../css/Task.css";
import moment from "moment";

export default function Task(props) {
    return (
        <div className="Task" style={{display: !props.title && "none"}} onClick={props.delete}>
            <h2>{props.title}</h2>
            <p style={{display: !props.due && "none"}}>Due: {moment.unix(props.due.seconds).format("LL")}</p>
        </div>
    )
}
