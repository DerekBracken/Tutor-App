
const UpdateProfile = ({user}) => {

    if ( user != null){
    return (
        <>
            <p>Hello</p>
            <form>

            <label HTMLfor="first_name">First name: </label>
                    <input type='text' id='first-name' name="first_name" value={user.firstName}/>

            <label HTMLfor="last_name">Last name:</label>
                    <input type='text' id='last-name' name="last_name" value={user.lastName}/>

            <label HTMLfor="dob"> Enter date of birth: </label>
                <input type="date" id='dob' name='dob' value={user.dateOfBirth}/>

            {/* EMAIL ADDRESS */}

            <label HTMLfor="contact_number">Enter contact number: </label>
                    <input type='tel' id='contact-number' name='contact_number'value={user.contactNumber}/>

            <label HTMLfor="gender">Gender identity: </label>
            <select name='gender' id='gender'>
                <option disabled selected>Select from below</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
            </select>

            <label HTMLfor="about_me">About you: </label>
                    <textarea id='about_me' name='about_me' value={user.aboutMe}/>

            <label HTMLfor="location"> Where are you based? </label>
            <select name='location' id='location'>
            <option disabled selected>Select from below</option>
                <option value="Aberdeen">Aberdeen</option>
                <option value="Dundee">Dundee</option>
                <option value="Edinburgh">Edinburgh</option>
                <option value="Glasgow">Glasgow</option>
                <option value="Inverness">Inverness</option>
                <option value="Stirling">Stirling</option>
            </select>

            <label>What English level are you?</label>
                    <select name='english_level' id='english_level' required>
                        <option disabled selected>Select from below</option>
                            <option value="beginner">Beginner</option>
                            <option value="elementary">Elementary</option>
                            <option value="pre_intermediate">Pre-Intermediate</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="upper_intermediate">Upper-Intermediate</option>
                            <option value="advanced">Advanced</option>
                    </select>

            <label HTMLfor="languages_spoken">What languages to do you speak? </label>
                <input type='text' id='languages_spoken' name="languages_spoken" value={user.languagesSpoken}/>

                    <div>
                        <label> Select availability: </label>
                        <label for="mon_fri_day">Monday-Friday Daytime</label>
                        <input type="checkbox" name="mon_fri_day" value="mon_fri_day" id="mon_fri_day"/>
                                                                    
                        <label for="mon_fri_eve">Monday-Friday Evening</label>
                        <input type="checkbox" name="mon_fri_eve" value="mon_fri_eve" id="mon_fri_eve"/>
                                                                
                        <label for="weekend_day">Weekend Daytime</label>
                        <input type="checkbox" name="weekend_day" value="weekend_day" id="weekend_day"/>
                                                                
                        <label for="weekend_eve">Weekend Evening</label>
                        <input type="checkbox" name="weekend_eve" value="weekend_eve" id="weekend_eve"/>                                   
                    </div>

            <input type='submit' value='submit'/>

            </form>
        </>
    )}
    return (
        <>
        this does not work
        </>
    )
}

export default UpdateProfile;