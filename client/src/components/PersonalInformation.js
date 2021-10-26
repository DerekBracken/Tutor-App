import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const PersonalInformation = ({user}) => {
    const { currentUser } = useAuth()


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