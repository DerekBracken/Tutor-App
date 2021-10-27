import React, { useState, useEffect} from 'react'
import "../styles/header.css"
import "../styles/button.css"
import {Link} from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import image from "../imagehell/MeetEngLogo.svg"


const HeaderComponent = ({user}) => {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState("")
    const [userTitle, setUserTitle] = useState("All Mentors")
    
    // const [profile, setProfile] = useState()
    // const [loggedin, setLoggedin] = useState(false)

    useEffect( ()=> {
      if (user !=null) {
        setUserTitle("My " + user.type[0].toUpperCase() + user.type.slice(1) + "s")
       }
    }, [user])
    
    async function handleLogout() {
      setError('')

      try {
          await logout()
          // history.push('/login')
      } catch {
          setError('Failed to log out')
      }
  }
    return(
        <>
            <div id="header">
                    <div id="navbar">
                    <a href="http://localhost:3000/"><img id="logo" src={image} type='image' alt='logo'/></a>

                    <div id="header-links">
                        <a href="http://localhost:3000/">Home</a>
                        <a href="http://localhost:3000/learning-resources">Learning Resources</a>
                        {!user && <a href="http://localhost:3000/how-it-works">How It Works</a>}
                        <a href="http://localhost:3000/view-mentors">{userTitle}</a>
                        {!currentUser &&  <a href="/login"><button className="header-button">Log In</button></a> }
                        {currentUser &&  <a  href="/profile"><button className="header-button" >Profile</button></a> }
                        {currentUser && <button className="header-button" to="/" variant='link' onClick={handleLogout}>Log Out</button>} 
                    </div>
            </div>
            </div>

            <div id="line"/>
        </>
    )
}

export default HeaderComponent;