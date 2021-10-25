import Service from "../services/service";
import { useAuth } from "../contexts/AuthContext"


const MenteeSignupFormComponent = () =>{
    const { currentUser } = useAuth()


    const handlePost = (mentee) => {
        const service = new Service();
        service.post("http://localhost:8080/mentees", mentee)
           .then(() => window.location = '/profile')
    }

    const handleFormSubmit = (event)=>{
        event.preventDefault();

        const availability = []

        const mentee = {
            "firstName" : event.target[0].value.trim().charAt(0).toUpperCase() + event.target[0].value.slice(1),
            "lastName" : event.target[1].value.trim().charAt(0).toUpperCase() + event.target[1].value.slice(1),
            "dateOfBirth" : event.target[2].value,
            "email" : currentUser.email,
            "contactNumber" : event.target[3].value,
            "gender" : event.target[4].value,
            "aboutMe" : event.target[5].value.trim(),
            "location" : event.target[6].value,
            "englishLevel" : event.target[7].value,
            "languagesSpoken": [event.target[8].value, "English"],
            "availability" : availability
        }

        for (let i = 8; i < 13; i ++){
            if (event.target[i].checked){
                availability.push(event.target[i].value)
            }
        }
        console.log(mentee);
        handlePost(mentee) 
    }
    return (
        <>
            <h1>Mentee Signup Form Component</h1>
            <form onSubmit={handleFormSubmit} id="mentee-form-container">
                <label className="mentee-form-label" HTMLfor="first_name">First name: </label><br/>
                    <input className="form-field" type='text' id='first-name' name="first_name" placeholder="Enter First Name" required/> <br/>
                
                <label className="mentee-form-label" HTMLfor="last_name">Last name:</label><br/>
                    <input className="form-field" type='text' id='last-name' name="last_name" placeholder="Enter Last Name" required/><br/>
                
                <label className="mentee-form-label" HTMLfor="dob"> Enter date of birth: </label><br/>
                    <input className="form-field" type="date" id='dob' name='dob' required/><br/>
                
                {/* <label>
                will prepopulate with email from Dereks bit
                    Enter email address: 
                    <input type='email' id='email' name='email' placeholder="Enter email address" required/>
                </label> */}
                <label className="mentee-form-label" HTMLfor="contact_number">Enter contact number: </label><br/>
                    <input className="form-field" type='tel' id='contact-number' name='contact_number' placeholder="07856 658 658" required/><br/>
                
                <label className="mentee-form-label" HTMLfor="gender">Gender identity: </label><br/>
                    <select className="form-field" name='gender' id='gender' required>
                        <option disabled selected>Select from below</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                    </select>
                
                <label className="mentee-form-label" HTMLfor="about_me">About you: </label><br/>
                    <textarea className="form-field" id='about_me' name='about_me' placeholder='I am from....' required/><br/>

                <label className="mentee-form-label" HTMLfor="location"> Where are you based? </label><br/>
                    <select className="form-field" name='location' id='location' required><br/>
                    <option disabled selected>Select from below</option>
                        <option value="Aberdeen">Aberdeen</option>
                        <option value="Dundee">Dundee</option>
                        <option value="Edinburgh">Edinburgh</option>
                        <option value="Glasgow">Glasgow</option>
                        <option value="Inverness">Inverness</option>
                        <option value="Stirling">Stirling</option>
                    </select>
                

                <label className="mentee-form-label" >What English level are you?</label><br/>
                    <select className="form-field" name='english_level' id='english_level' required>
                        <option disabled selected>Select</option>
                            <option value="beginner">Beginner</option>
                            <option value="elementary">Elementary</option>
                            <option value="pre_intermediate">Pre-Intermediate</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="upper_intermediate">Upper-Intermediate</option>
                            <option value="advanced">Advanced</option>
                    </select>

                <label className="mentee-form-label" HTMLfor="languages_spoken">What languages to do you speak? </label><br/>
                    <input className="form-field" type='text' id='languages_spoken' name="languages_spoken" placeholder="e.g. Polish" required/><br/>
                        <div>
                            <label className="mentee-form-label" > Select availability: </label>
                            <label className="mentee-form-small-options" for="mon_fri_day">Monday-Friday Daytime</label>
                            <input type="checkbox" name="mon_fri_day" value="mon_fri_day" id="mon_fri_day"/>
                                                                       
                            <label className="mentee-form-small-options" for="mon_fri_eve">Monday-Friday Evening</label>
                            <input type="checkbox" name="mon_fri_eve" value="mon_fri_eve" id="mon_fri_eve"/>
                                                                    
                            <label className="mentee-form-small-options" for="weekend_day">Weekend Daytime</label>
                            <input type="checkbox" name="weekend_day" value="weekend_day" id="weekend_day"/>
                                                                    
                            <label className="mentee-form-small-options" for="weekend_eve">Weekend Evening</label>
                            <input type="checkbox" name="weekend_eve" value="weekend_eve" id="weekend_eve"/>                                   
                        </div>
                <input className="small-button" type='submit' value='Submit'/>
            </form>
        </>
    )
}

//     @Column(name="languages_spoken")
//     private ArrayList<String> languagesSpoken;

export default MenteeSignupFormComponent;


// Code for red asterisk
// .form-group .required .control-label:after {
//     content:"*";color:red;
//   }