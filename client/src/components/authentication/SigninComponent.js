import React, {useRef, useState} from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import "../../styles/Authentication.css"
import "../../styles/form.css"
import "../../styles/button.css"


export default function Signup(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to create an account, email may already exist')
        }
        setLoading(false)        
    }

    return (
        <>
    
            <div className="auth-div-wrapper">
                <h2 className='form-title'>Sign Up</h2>
                {error && <alert variant="danger">{error}</alert>}
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-label" id="email">
                        <label >Email</label><br/>
                        <input className="form-field" type="email" ref={emailRef} required />
                    </div>
                    <div className="form-label" id="password">
                        <label >Password</label><br/>
                        <input className="form-field" type="password" ref={passwordRef} required />
                    </div>
                    <div className="form-label" id="password-confirm">
                        <label >Confirm Password</label><br/>
                        <input className="form-field" type="password" ref={passwordConfirmRef} required />
                    </div>
                    <button className="small-button" disabled={loading} type="submit">Sign Up</button>
                </form> 
                <h4 >Already have an account? <a className="form-redirection-link" href="http://localhost:3000/login">Log In</a> </h4>  
            </div>
        </>
    )
}
