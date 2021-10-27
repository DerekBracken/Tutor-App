import React, {useRef, useState} from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import "../../styles/Authentication.css"
import HeaderComponent from '../HeaderComponent';
import Footer from '../FooterComponent';

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
            .then(() => window.location = '/profile')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)        
    }

    return (
        <>
        <HeaderComponent/>
            <div className="auth-div-wrapper">
                <h2 className='form-title' >Log In</h2>
                {error && <alert variant="danger">{error}</alert>}
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-label" id="email">
                        <label>Email</label> <br/>
                        <input type="email" ref={emailRef} required />
                    </div>
                    <div className="form-label" id="password">
                        <label>Password</label> <br/>
                        <input type="password" ref={passwordRef} required />
                    </div>
                    <button className="small-button" disabled={loading} type="submit">Log In</button>
                </form> 
                <a className="form-redirection-link" href="/forgot-password">Forgot Password</a>

                
                <h4> Need an account? <a className="form-redirection-link" href="http://localhost:3000/signup">Sign Up</a> </h4>
            </div>
            <Footer/>
        </>
    )
}
