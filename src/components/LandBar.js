import React from 'react'
import { Link } from 'react-router-dom';

export default function LandBar() {
    return (
        <nav className="nav-shadow dash-nav navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="dash-brand navbar-brand">TaskBuddy</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav land-nav">
              <Link className="nav-link" to="/login">Log In</Link>
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </div>
          </div>
        </nav>
    )
}
