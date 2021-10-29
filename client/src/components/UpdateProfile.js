import HeaderComponent from "./HeaderComponent";

const UpdateProfile = ({user}) => {

    if ( user != null){
        return (
            <>
                <HeaderComponent/>

                <h1 id="signup-form-heading" >Update your profile</h1>

                <form id="user-form-container">

                    <div className="form-field-container">
                        <label className="mentee-form-label" HTMLfor="first_name">First name: </label>
                        <input className="form-field" type='text' id='first-name' name="first_name" placeholder={user.firstName}/>
                    </div><br/>

                    <div className="form-field-container">
                        <label className="mentee-form-label" HTMLfor="last_name">Last name:</label>
                        <input className="form-field" type='text' id='last-name' name="last_name" placeholder={user.lastName}/>
                    </div><br/>

                    <div className="form-field-container">
                        <label className="mentee-form-label" HTMLfor="dob"> Enter date of birth: </label>
                        <input className="form-field" type="date" id='dob' name='dob' placeholder={user.dateOfBirth}/>
                    </div><br/>
                    <div className="form-field-container">
                        <label className="mentee-form-label" HTMLfor="contact_number">Enter contact number: </label>
                        <input className="form-field" type='tel' id='contact-number' name='contact_number' placeholder={user.contactNumber}/>
                    </div><br/>

                    <div className="form-field-container">
                    <label className="mentee-form-label" HTMLfor="gender">Gender identity: </label>
                    <select className="form-field" name='gender' id='gender'>
                        <option >{user.gender}</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    </div><br/>

                    <div className="form-field-container">
                        <label className="mentee-form-label" HTMLfor="about_me">About you: </label>
                        <textarea className="form-field" id='about_me' name='about_me' placeholder={user.aboutMe}/>
                    </div><br/>

                    <div className="form-field-container">
                        <label className="mentee-form-label" HTMLfor="location"> Where are you based? </label>
                        <select className="form-field" name='location' id='location'>
                            <option >{user.location}</option>
                            <option value="Aberdeen">Aberdeen</option>
                            <option value="Dundee">Dundee</option>
                            <option value="Edinburgh">Edinburgh</option>
                            <option value="Glasgow">Glasgow</option>
                            <option value="Inverness">Inverness</option>
                            <option value="Stirling">Stirling</option>
                        </select>
                    </div><br/>

                    <div className="form-field-container">
                        <label className="mentee-form-label">What English level are you?</label>
                            <select className="form-field" name='english_level' id='english_level' required>
                                <option >{user.englishLevel}</option>
                                <option value="beginner">Beginner</option>
                                <option value="elementary">Elementary</option>
                                <option value="pre_intermediate">Pre-Intermediate</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="upper_intermediate">Upper-Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                    </div><br/>

                    <div className="form-field-container">
                        <label className="mentee-form-label" HTMLfor="languages_spoken">What languages to do you speak? </label>
                        <input className="form-field" type='text' id='languages_spoken' name="languages_spoken" placeholder={user.languagesSpoken}/>
                    </div>

                            <div className="form-field-container">
                                <label className="mentee-form-label"> Select availability: </label>

                                <div>
                                    <input type="checkbox" name="mon_fri_day" value="mon_fri_day" id="mon_fri_day"/>
                                    <label className="mentee-form-small-options" for="mon_fri_day">Monday-Friday Daytime</label>
                                </div>

                                <div>                                  
                                    <input type="checkbox" name="mon_fri_eve" value="mon_fri_eve" id="mon_fri_eve"/>
                                    <label className="mentee-form-small-options" for="mon_fri_eve">Monday-Friday Evening</label>
                                </div>

                                <div>                                      
                                    <input type="checkbox" name="weekend_day" value="weekend_day" id="weekend_day"/>
                                    <label className="mentee-form-small-options" for="weekend_day">Weekend Daytime</label>
                                </div>

                                <div>                                        
                                    <input type="checkbox" name="weekend_eve" value="weekend_eve" id="weekend_eve"/>  
                                    <label className="mentee-form-small-options" for="weekend_eve">Weekend Evening</label>
                                </div>                    
                            </div><br/>
                    <input className="small-button" type='submit' value='Submit'/>
                </form>
            </>
        )}
    return (
        <>
            <p>This does not work</p>
        </>
    )
}

export default UpdateProfile;