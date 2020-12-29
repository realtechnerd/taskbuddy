import React, { useState } from 'react'
import "../css/Form.css";
import { Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("")
            setLoading(true)
            await login(email, password)
            history.push("/dashboard")
        } catch {
            setError('There was an error signing in.')
        }
        setLoading(false);
    }

    return (
        <>
        <div className="login">
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{maxWidth: "400px"}}>
        <h1 id="title" className="mb-2">TaskBuddy <Icon icon={faDog} /></h1>
            <div className="form-card card form-shadow">
                <div className="card-body">
                    <h2 className="text-center">Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password} required/>
                        </div>
                        <Button disabled={loading} className="btn btn-primary w-100" type="submit">Login</Button>
                    </form>
                </div>
            </div>
            <div className="w-100 text-center mt-2 log-in">
                Don't have an account? <Link to="/signup" style={{color: "#fff"}}>Sign Up</Link>
            </div>
            </div>
        </Container>
        </div>
        </>
    )
}
