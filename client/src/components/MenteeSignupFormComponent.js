const MentorSignupFormComponent = () =>{

    return (
        <>
            <h1>MenteeSignupFormComponent</h1>
            <form>
                <label>
                    First name: 
                    <input type='text' id='first-name' name="first_name" placeholder="Enter first name" required/>
                </label>
                <label>
                    Last name:
                    <input type='text' id='last-name' name="last_name" placeholder="Enter last name" required/>
                </label>
                <label>
                    Enter date of birth:
                    <input type="date" id='dob' name='dob' required/>
                </label>
                <label>
                    Enter email address: 
                    <input type='email' id='email' name='email' placeholder="Enter email address" required/>
                </label>
                <label>
                    Enter contact number:
                    <input type='tel' id='contact-number' name='contact_number' placeholder="Enter contact number" required/>
                </label>
                <label>
                    Gender identity:
                    <select name='gender' id='gender' required>
                    <option disabled selected>Select from below</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label>
                    About you:
                    <textarea id='about_me' name='about_me' placeholder='Answer here' required/>
                </label>
                <label>
                Where are you based?
                    <select name='location' id='location' required>
                    <option disabled selected>Select from below</option>
                        <option value="Aberdeen">Aberdeen</option>
                        <option value="Dundee">Dundee</option>
                        <option value="Edinburgh">Edinburgh</option>
                        <option value="Glasgow">Glasgow</option>
                        <option value="Inverness">Inverness</option>
                        <option value="Stirling">Stirling</option>
                    </select>
                </label>

                <label>
                What English level are you?
                    <select name='english_level' id='english_level' required>
                    <option disabled selected>Select from below</option>
                        <option value="beginner">Beginner</option>
                        <option value="elementary">Elementary</option>
                        <option value="pre_intermediate">Pre-Intermediate</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="upper_intermediate">Upper-Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                
                </label>

                <label>
                    What languages to do you speak?
                    <input type='text' id='languages_spoken' name="languages_spoken" placeholder="Input languages spoken" required/>
                </label>
                <label>
                    Select availability:
                        <div><input type="checkbox" name="mon_fri_day" value="mon_fri_day" id="mon_fri_day"/>
                        <label for="mon_fri_day">Mon-Fri Daytime</label></div>

                        <div><input type="checkbox" name="mon_fri_eve" value="mon_fri_eve" id="mon_fri_eve"/>
                        <label for="mon_fri_eve">Mon-Fri Evening</label></div>

                        <div><input type="checkbox" name="weekend_day" value="weekend_day" id="weekend_day"/>
                        <label for="weekend_day">Weekend Daytime</label></div>

                        <div><input type="checkbox" name="weekend_eve" value="weekend_eve" id="weekend_eve"/>
                        <label for="weekend_eve">Weekend Evening</label></div>

                </label>
                
       
                <input type='submit' value='submit'/>
            </form>
        </>
    )
}

//     @Column(name="languages_spoken")
//     private ArrayList<String> languagesSpoken;

export default MentorSignupFormComponent;


// Code for red asterisk
// .form-group .required .control-label:after {
//     content:"*";color:red;
//   }