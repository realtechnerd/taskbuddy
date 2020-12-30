import React, { useState } from 'react'
import "../css/Form.css";
import { Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const { signup } = useAuth();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== passwordConfirm) {
            return setError("Please verify that the passwords match.")
        }

        try {
            setError("")
            setLoading(true)
            await signup(email, password)
            history.push("/dashboard");
        } catch {
            setError('Something went wrong! Please try again later.')
        }
        setLoading(false);
    }

    return (
        <>
        <div className="signup">
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{maxWidth: "400px"}}>
        <Link id="titlelink" to="/"><h1 id="title" className="mb-2">TaskBuddy <Icon icon={faDog} /></h1></Link>
            <div className="form-card card form-shadow">
                <div className="card-body">
                    <h2 className="text-center">Sign Up</h2>
                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordConfirm">Confirm Password:</label>
                            <input type="password" id="passwordConfirm" className="form-control" onChange={e => setPasswordConfirm(e.target.value)} value={passwordConfirm} required/>
                        </div>
                        <Button disabled={loading} className="btn btn-primary w-100" type="submit">Sign Up</Button>
                    </form>
                </div>
            </div>
            <div className="w-100 text-center mt-2 log-in">
                Already have an account? <Link to="/login" style={{color: "#fff"}}>Log in</Link>
            </div>
            </div>
        </Container>
        </div>
        </>
    )
}
