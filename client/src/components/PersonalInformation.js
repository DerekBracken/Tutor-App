import "../styles/profile.css"
import "../styles/form.css"
import "../styles/button.css"

const PersonalInformation = ({user}) => {

    if (user != null){
      return (
          <div>
            <h1> Profile </h1>
            <p className="profile-container">
              <div className="information-container"><p className="profile-label">First Name </p> <p className="profile-information">{user.firstName}</p></div>
              <div className="information-container"><p className="profile-label">Last Name</p> <p className="profile-information"> {user.lastName} </p></div>
              <div className="information-container"><p className="profile-label">Date of Birth</p> <p className="profile-information">{user.dateOfBirth}</p></div>
              <div className="information-container"><p className="profile-label">Email</p><p className="profile-information">{user.email}</p></div>
              <div className="information-container"><p className="profile-label">Contact Number</p><p className="profile-information">{user.contactNumber} </p></div>
              <div className="information-container"><p className="profile-label"> Gender</p><p className="profile-information">{user.gender}</p></div>
              <div className="information-container"><p className="profile-label">About Me </p><p className="profile-information">{user.aboutMe}</p></div>
              <div className="information-container"><p className="profile-label">Location </p><p className="profile-information">{user.location}</p></div>
              <div className="information-container"><p className="profile-label">Languages Spoken</p><p className="profile-information">{user.languagesSpoken.join(", ")}</p></div>
              <div className="information-container"><p className="profile-label">Availability </p><p className="profile-information">{user.availability.join(", ")} </p></div>
              <button className="update-button">Update</button>
            </p>
          </div>
      );
  } 
  
  return (
    <h3> You haven't entered any personal information </h3>
  )}

export default PersonalInformation;