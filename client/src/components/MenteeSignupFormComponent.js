import Service from "../services/service";
import { useAuth } from "../contexts/AuthContext"


const MenteeSignupFormComponent = () =>{
    const { currentUser } = useAuth()


    const handlePost = (mentee) => {
        const service = new Service();
        service.postMentor("http://localhost:8080/mentees", mentee)
        //    .then(() => window.location = '/mentees')
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
            "motivation" : event.target[5].value.trim(),
            "location" : event.target[6].value,
            "engLevel" : event.target[7].value,
            "languagesSpoken": [event.target[8].value, "English"],
            "availability" : availability
        }

        for (let i = 8; i < 13; i ++){
            if (event.target[i].checked){
                availability.push(event.target[i].value)
            }
        }

        handlePost(mentee) 
    }
    return (
        <>
            <h1>Mentee Signup Form Component</h1>
            <form onSubmit={handleFormSubmit}>
                <label HTMLfor="first_name">First name: </label>
                    <input type='text' id='first-name' name="first_name" placeholder="Enter first name" required/>
                
                <label HTMLfor="last_name">Last name:</label>
                    <input type='text' id='last-name' name="last_name" placeholder="Enter last name" required/>
                
                <label HTMLfor="dob"> Enter date of birth: </label>
                    <input type="date" id='dob' name='dob' required/>
                
                {/* <label>
                will prepopulate with email from Dereks bit
                    Enter email address: 
                    <input type='email' id='email' name='email' placeholder="Enter email address" required/>
                </label> */}
                <label HTMLfor="contact_number">Enter contact number: </label>
                    <input type='tel' id='contact-number' name='contact_number' placeholder="Enter contact number" required/>
                
                <label HTMLfor="gender">Gender identity: </label>
                    <select name='gender' id='gender' required>
                        <option disabled selected>Select from below</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                    </select>
                
                <label HTMLfor="about_me">About you: </label>
                    <textarea id='about_me' name='about_me' placeholder='Answer here' required/>

                <label HTMLfor="location"> Where are you based? </label>
                    <select name='location' id='location' required>
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
                    <input type='text' id='languages_spoken' name="languages_spoken" placeholder="Input languages spoken" required/>
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
    )
}

//     @Column(name="languages_spoken")
//     private ArrayList<String> languagesSpoken;

export default MenteeSignupFormComponent;


// Code for red asterisk
// .form-group .required .control-label:after {
//     content:"*";color:red;
//   }