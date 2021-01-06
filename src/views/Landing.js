import React from 'react'
import "../css/Landing.css";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';
import LandBar from "../components/LandBar";
import { useAuth } from '../contexts/AuthContext';

export default function Landing() {
    const { currentUser } = useAuth();
    const history = useHistory();
    if (currentUser) {
      history.push('/dashboard');
    }
    return (
      <>
      <LandBar/>
        <div className="Landing">
            <div className="landing-jumbotron jumbotron" style={{paddingTop: "8rem"}}>
              <div className="container">
                <h1 className="display-4">TaskBuddy <Icon icon={faDog}/></h1>
                <p className="lead">Stop Slacking. Start Rocking.</p>
                <Link className="b bprimary lb blg" to="/signup">Sign Up</Link>
                <Link className="b bprimary lb blg" to="/login" style={{marginLeft: "15px"}}>Sign In</Link>
              </div>
              <br/>
              <h3>A Todo List app to make your life easier.</h3>
            </div>
        </div>
      </>
    )
}
