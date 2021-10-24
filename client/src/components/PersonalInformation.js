import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

const PersonalInformation = () => {
    const { currentUser } = useAuth()
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
    },[])

    const getUser = function() {
        fetch(`http://localhost:8080/mentees?email=${currentUser.email}`)
        .then(res => res.json())
        .then(user => setUser(user))
    }
    if (user != null){
      console.log(user[0].firstName);
      console.log(user[0].mentor.id);
    } 

    return (
        <div>
          {currentUser && currentUser.email} Has Signed In
          {user && user[0].firstName} Is my name 
        </div>
    );
  }

export default PersonalInformation;