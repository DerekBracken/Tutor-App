import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

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


    if (user != null){
      const updateUrl = "/users/update/" + user.id
    return (
        <div>
          <br/>
          {/* delete  */}
          {currentUser && currentUser.email} is signed in 
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Date of Birth: {user.dateOfBirth}</p>
          <p>Email: {user.email}</p>
          <p>Contact Number: {user.contactNumber}</p>
          <p>Gender: {user.gender}</p>
          <p>About Me: {user.aboutMe}</p>
          <p>Location: {user.location}</p>
          <p>English Level: {user.englishLevel}</p>
          <p>Languages Spoken: {user.languagesSpoken}</p>
          <p>Availability: {user.availability}</p>
          <Link to= {updateUrl}><button type="button">Update</button></Link>
        </div>
    );
  } return (
    <h3>Can't render page</h3>
  )}

  // create a form - contains all these fields
  // on submit - call a function to update the user
  // create a function to post a user to the update route


export default PersonalInformation;