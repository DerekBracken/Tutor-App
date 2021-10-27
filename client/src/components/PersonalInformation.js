import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import "../styles/profile.css"
import "../styles/form.css"
import "../styles/button.css"

const PersonalInformation = ({user}) => {
    const { currentUser } = useAuth()


    if (user != null){
      const updateUrl = "/users/update/" + user.id
    return (
        <div>
          <h2 id="signup-form-heading">Profile</h2>
          <p className="profile-container">
         
          <div className="information-container"><p className="profile-label">First Name </p> <p className="profile-information">{user.firstName}</p></div>
          <div className="information-container"><p className="profile-label">Last Name</p> <p className="profile-information"> {user.lastName} </p></div>
          <div className="information-container"><p className="profile-label">Date of Birth</p> <p className="profile-information">{user.dateOfBirth}</p></div>
          <div className="information-container"><p className="profile-label">Email</p><p className="profile-information">{user.email}</p></div>
          <div className="information-container"><p className="profile-label">Contact Number</p><p className="profile-information">{user.contactNumber} </p></div>
          <div className="information-container"><p className="profile-label"> Gender</p><p className="profile-information">{user.gender}</p></div>
          <div className="information-container"><p className="profile-label">About Me </p><p className="profile-information">{user.aboutMe}</p></div>
          <div className="information-container"><p className="profile-label">Location </p><p className="profile-information">{user.location}</p></div>
          <div className="information-container"><p className="profile-label">English Level </p><p className="profile-information"> {user.englishLevel}</p></div>
          <div className="information-container"><p className="profile-label">Languages Spoken</p><p className="profile-information">{user.languagesSpoken}</p></div>
          <div className="information-container"><p className="profile-label">Availability </p><p className="profile-information">{user.availability} </p></div>
            {/* <Link to= {updateUrl}><button type="button">Update</button></Link> */}
            <div className="information-container"><button className="small-button">Update</button></div>
          </p>
        </div>
    );
  } return (
    <h3>You don't have any entered personal information</h3>
  )}

  // create a form - contains all these fields
  // on submit - call a function to update the user
  // create a function to post a user to the update route


export default PersonalInformation;