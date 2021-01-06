import React from 'react'
import "../css/Loader.css";
import LoadImg from "../imgs/loader.png";

export default function Loader() {
    return (
        <div className="Loader d-flex align-items-center justify-content-center">
            <img src={LoadImg} alt="Loading.."/>
        </div>
    )
}
