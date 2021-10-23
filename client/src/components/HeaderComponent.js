import React, { useState } from 'react'
import "../styles/header.css"
import {Link} from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";


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
        <div id="main-nav">

            <div>
            <Link to="/"><button>
              Home
            </button>
            </Link>
            </div>

            <div>
            <Link to="/learningresources"><button>
              Learning resources
            </button>
            </Link>
            </div>

            <div>
                <button >Mentor/mentee</button>
            </div>

            {/* <div>
                <button >Chat</button>
            </div> */}

            <div>
            <Link to="/profile"><button>{profile}</button></Link>
            {currentUser && <button variant='link' onClick={handleLogout}>Log Out</button>}
            </div>
           
        </div>
        </>
    )
}

export default HeaderComponent;