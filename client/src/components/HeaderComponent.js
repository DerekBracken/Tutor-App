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
    const [url, setUrl] = useState('/view-mentors')
    
    // const [profile, setProfile] = useState()
    // const [loggedin, setLoggedin] = useState(false)

    console.log("This is the user", user)

    useEffect( ()=> {
        if (user != null) {
            if (user.type !=null) {
                if (user.type == "Mentor"){
                setUrl("/my-mentees")
                setUserTitle("My Mentees")
                } else {
                    setUserTitle("My Mentors")
                }
            } 
        } else {
            setUserTitle("All Mentors")
        }
        }, [user])
    
    async function handleLogout() {
      setError('')

      try {
          await logout()
          .then(() => window.location = '/')
          // history.push('/login')
      } catch {
          setError('Failed to log out')
      }
  }
    return(
        <>
            <div id="header">
    
                    <a href="http://localhost:3000/"><img id="logo" src={image} type='image' alt='logo'/></a>

                    <div id="header-links">
                        <a href="http://localhost:3000/">Home</a>
                        <a href="http://localhost:3000/learning-resources">Learning Resources</a>

                        {!user && <a href="http://localhost:3000/how-it-works">How It Works</a>}
                        {user && user.type == "Mentor" &&  <a  href="/view-mentors">All Mentors</a> }
                        <a href={url}>{userTitle}</a>
                        {user &&  <a  href="/sessions">Sessions</a> }
                        {!user &&  <a href="/login"><button className="header-button">Log In</button></a> }
                        {user &&  <a  href="/profile"><button className="header-button" >Profile</button></a> }
                        {user && <button className="header-button" to="/" variant='link' onClick={handleLogout}>Log Out</button>} 

                    </div>
            </div>
           

            <div id="line"/>
        </>
    )
}

export default HeaderComponent;