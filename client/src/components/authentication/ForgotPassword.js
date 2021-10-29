import React, {useRef, useState} from 'react';
import { useAuth } from '../../contexts/AuthContext'
import "../../styles/Authentication.css"
import HeaderComponent from '../HeaderComponent';

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
        <HeaderComponent/>
            <div className="auth-div-wrapper">
                <h2 className='form-title'>Password Reset</h2>
                {error && <alert variant="danger">{error}</alert>}
                {message && <alert variant="success">{message}</alert>}
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-label" id="email">
                        <label  >Email</label><br/>
                        <input type="email" ref={emailRef} required />
                    </div>
                    <button className="small-button" disabled={loading} type="submit">Reset Password</button>
                </form>
                <h3>Need an account? <a className="form-redirection-link" href="http://localhost:3000/signup">Sign Up</a></h3>
            </div>
        </>
    )
}