import React, { useState } from 'react'
import "../styles/header.css"
import {Link} from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";
import image from "../imagehell/MeetEngLogo.svg";


const HeaderComponent = () => {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState("")
    // const [profile, setProfile] = useState()
    // const [loggedin, setLoggedin] = useState(false)

    let profile;
    if (currentUser){
      profile = "Profile"
    } else {
      profile = "login" 
    }

    async function handleLogout() {
      setError('')

      try {
          await logout()
          // history.pushState('/login')
      } catch {
          setError('Failed to log out')
      }
  }


    return(
    <>
        <div id="header">
                <div id="navbar">
                 <img id="logo" src={image} type='image' alt='logo'/>
                    <a href="http://localhost:3000/">Home</a>
                    <a href="http://localhost:3000/learning-resources">Learning Resources</a>
                    <a href="http://localhost:3000/how-it-works">How It Works</a>
                    <a href="http://localhost:3000/view-mentors">All Mentors</a>
                
                    <Link to="/profile"><button>{profile}</button></Link> {currentUser && <button variant='link' onClick={handleLogout}>Log Out</button>} 
                </div>
           

        </div>

    </>
    )
}

export default HeaderComponent;