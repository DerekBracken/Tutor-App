import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

const PersonalInformation = () => {
    const { currentUser } = useAuth()
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
    },[])

    // Will need to add fetch for mentees too, and add a enum type to mentor/mentee to control flow.
    // Add error for catch
    const getUser = function() {
      try {
        fetch(`http://localhost:8080/mentees?email=${currentUser.email}`)
        .then(res => res.json())
        .then(user => setUser(user))
      } catch {}
      try {
        fetch(`http://localhost:8080/mentors?email=${currentUser.email}`)
        .then(res => res.json())
        .then(user => setUser(user))
      } catch {}
    }

    // if (user != null){
    //   console.log(user);
    // } 

    return (
        <div>
          {currentUser && currentUser.email} Has Signed In
          <br/>
          {user && user.firstName} Is my name 
        </div>
    );
  }

export default PersonalInformation;