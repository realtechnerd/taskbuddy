import React from 'react'
import "../css/Loader.css";
import LoadImg from "../imgs/loader.gif";

export default function Loader() {
    return (
        <div className="Loader">
            <img src={LoadImg} alt="Loading.."/>
        </div>
    )
}
