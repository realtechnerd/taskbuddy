import React, { useState } from 'react'
import "../css/Form.css";
import { Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const { forgotPassword } = useAuth();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("")
            setLoading(true)
            await forgotPassword(email)
        } catch {
            setError('There was an error resetting your password.')
        }
        setLoading(false);

        setEmail("");
    }

    return (
        <>
        <div className="login">
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{maxWidth: "400px"}}>
        <Link id="titlelink" to="/"><h1 id="title" className="mb-2">TaskBuddy <Icon icon={faDog} /></h1></Link>
            <div className="form-card card form-shadow">
                <div className="card-body">
                    <h2 className="text-center">Reset Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} required/>
                        </div>
                        <Button disabled={loading} className="btn btn-primary w-100" type="submit">Reset Password</Button>
                    </form>
                </div>
            </div>
            <div className="w-100 text-center mt-2 log-in">
                Remember your password? <Link to="/login" style={{color: "#fff"}}>Log In</Link>
            </div>
            </div>
        </Container>
        </div>
        </>
    )
}
