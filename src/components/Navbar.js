import React from 'react'
import "../css/Navbar.css";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar(props) {
    const { logout } = useAuth();
    return (
        <nav className="nav-shadow dash-nav navbar navbar-expand-lg dash-nav">
          <a className="dash-brand navbar-brand">TaskBuddy</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <button onClick={logout} className="nav-link lgbdanger lb" style={{color: "#fff"}}>Log Out</button>
            </div>
          </div>
        </nav>
    )
}
