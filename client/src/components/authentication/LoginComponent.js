import React, {useRef, useState} from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import "../../style/Authentication.css"

export default function Login(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/authentication-complete")
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)        
    }

    return (
        <>
            <div className="auth-div-wrapper">
                <h2>Log In</h2>
                {error && <alert variant="danger">{error}</alert>}
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div id="email">
                        <label>Email</label>
                        <input type="email" ref={emailRef} required />
                    </div>
                    <div id="password">
                        <label>password</label>
                        <input type="password" ref={passwordRef} required />
                    </div>
                    <button disabled={loading} type="submit">Log In</button>
                </form> 
                <h3>Need an account? <Link to="/signup">Sign In </Link></h3>
            </div>
        </>
    )
}