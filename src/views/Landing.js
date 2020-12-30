import React from 'react'
import "../css/Landing.css";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import LandBar from "../components/LandBar";

export default function Landing() {
    return (
      <>
      <LandBar/>
        <div className="Landing">
            <div class="landing-jumbotron d-flex align-items-center justify-content-end" style={{height: "100vh"}}>
              <div class="container">
                <h1 class="display-4">TaskBuddy <Icon icon={faDog}/></h1>
                <p class="lead">Stop Slacking. Start Doing.</p>
                <Link class="b bprimary lb blg" to="/signup">Sign Up</Link>
                <Link class="b bprimary lb blg" to="/login" style={{marginLeft: "5px"}}>Sign In</Link>
              </div>
            </div>
        </div>
      </>
    )
}
