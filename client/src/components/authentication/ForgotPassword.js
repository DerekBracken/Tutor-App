import React, {useRef, useState} from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { Link } from "react-router-dom"
import "../../style/Authentication.css"



export default function ForgotPassword(){
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)      
    }

    return (
        <>
            <div className="auth-div-wrapper">
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <alert variant="danger">{error}</alert>}
                {message && <alert variant="success">{message}</alert>}
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div id="email">
                        <label>Email</label>
                        <input type="email" ref={emailRef} required />
                    </div>
                    <button disabled={loading} type="submit">Reset Password</button>
                </form>
                <Link to="/login">Login </Link>
                <h3>Need an account? <Link to="/signup">Sign Up</Link></h3>
            </div>
        </>
    )
}