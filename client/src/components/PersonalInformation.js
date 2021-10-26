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

    if (user != null){
      console.log(user);
    } 

    return (
        <div>
          {currentUser && currentUser.email} Has Signed In
          <br/>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Date of Birth: {user.dateOfBirth}</p>
          <p>Email: {user.email}</p>
          <p>Contact Number: {user.contactNumber}</p>
          <p>Gender: {user.gender}</p>
          <p>About: {user.aboutMe}</p>
          <p>Location: {user.location}</p>
          <p>English Level: {user.englishLevel}</p>
          <p>Languages Spoken: {user.languagesSpoken}</p>
          <p>Availability: {user.availability}</p>
        </div>
    );
  }

export default PersonalInformation;