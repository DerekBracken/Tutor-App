import React, {useRef, useState} from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"

export default function Signup(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    // const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            // history.push("/")
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)        
    }

    return (
        <>
            <div>
                <h2>Sign Up</h2>
                {error && <alert variant="danger">{error}</alert>}
                <form onSubmit={handleSubmit}>
                    <form id="email">
                        <label>Email</label>
                        <input type="email" ref={emailRef} required />
                    </form>
                    <form id="password">
                        <label>password</label>
                        <input type="password" ref={passwordRef} required />
                    </form>
                    <form id="password-confirm">
                        <label>password Conformation</label>
                        <input type="password" ref={passwordConfirmRef} required />
                    </form>
                </form>
                <button disabled={loading} type="submit">Sign Up</button>
            </div>
            <div>
                Already have an account? Log In
            </div>
        </>
    )
}