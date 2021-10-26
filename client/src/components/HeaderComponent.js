import React, { useState, useEffect} from 'react'
import "../styles/header.css"
import {Link} from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";
import image from "../imagehell/MeetEngLogo.svg";


const HeaderComponent = ({user}) => {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState("")
    const [userTitle, setUserTitle] = useState("All Mentors")
    
    // const [profile, setProfile] = useState()
    // const [loggedin, setLoggedin] = useState(false)

    useEffect( ()=> {
      if (user !=null) {
        setUserTitle("My " + user.type[0].toUpperCase() + user.type.slice(1))
       }
    }, [user])
    
    



    let profile = "Login";
    
    // let menteeTitle;
    // if (currentUser){
    //   profile = "Profile"
    // } 

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
                    <a href="http://localhost:3000/view-mentors">{userTitle}</a>
                    {!currentUser &&  <a href="/login"><button>Log In</button></a> }
                    {currentUser &&  <a href="/profile"><button>{profile}</button></a> }
                    {currentUser && <button to="/" variant='link' onClick={handleLogout}>Log Out</button>} 
                </div>
           

        </div>

    </>
    )
}

export default HeaderComponent;