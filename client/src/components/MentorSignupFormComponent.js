import Service from "../services/service";
import { useAuth } from "../contexts/AuthContext"


const MentorSignupFormComponent = () =>{
    const { currentUser } = useAuth()


    const handlePost = (mentor) => {
        const service = new Service();
        service.postMentor("http://localhost:8080/mentors", mentor)
           .then(() => window.location = '/profile')
    }
 
    const handleFormSubmit= (event)=>{
        event.preventDefault();

        const teachingLevel = []
        const availability = []

        const mentor = {
            "firstName" : event.target[0].value.trim().charAt(0).toUpperCase() + event.target[0].value.slice(1),
            "lastName" : event.target[1].value.trim().charAt(0).toUpperCase() + event.target[1].value.slice(1),
            "dateOfBirth" : event.target[2].value,
            "email" : currentUser.email,
            "contactNumber" : event.target[3].value.trim(),
            "gender" : event.target[4].value,
            "motivation" : event.target[5].value.trim(),
            "location" : event.target[6].value,
            "teachingLevel" : teachingLevel,
            "languagesSpoken": [event.target[13].value, "English"],
            "availability" : availability
        }

        for (let i = 14; i < 18; i ++){
            if (event.target[i].checked){
                availability.push(event.target[i].value)
            }
        }

        for (let i = 7; i < 14; i ++){
            if (event.target[i].checked){
                teachingLevel.push(event.target[i].value)
            }
        }
        console.log(mentor);

        handlePost(mentor)
    }


// put all the required back in the form...
    return (
        <>
            <h1>MentorSignupFormComponent</h1>
            <form onSubmit={handleFormSubmit}>
                
                <label HTMLfor="first_name">First name:</label>
                    <input type='text' id='first-name' name="first_name" placeholder="Enter first name" />
                
                <label HTMLfor="last_name">Last name:</label>
                    <input type='text' id='last-name' name="last_name" placeholder="Enter last name" />
 
                <label HTMLfor='dob'>Enter date of birth:</label>
                    <input type="date" id='dob' name='dob' />
                    
                {/* <label>
                will pre-populate with email from Derek's bit

                    Enter email address: 
                    <input type='email' id='email' name='email' placeholder="Enter email address" required/>
                </label> */}
                
                <label HTMLfor="contact_number">Enter contact number:</label>
                    <input type='tel' id='contact-number' name='contact_number' placeholder="Enter contact number" />
                    
                <label HTMLfor="gender">Gender identity:</label>
                    <select name='gender' id='gender' >
                    <option disabled selected>Select from below</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                
                <label HTMLfor="motivation">What made you want to become a mentor?</label>
                    <textarea id='motivation' name='motivation' placeholder='Answer here' />
                
                <label HTMLfor="location">Where are you based?</label>
                    <select name='location' id='location' >
                    <option disabled selected>Select from below</option>
                        <option value="Aberdeen">Aberdeen</option>
                        <option value="Dundee">Dundee</option>
                        <option value="Edinburgh">Edinburgh</option>
                        <option value="Glasgow">Glasgow</option>
                        <option value="Inverness">Inverness</option>
                        <option value="Stirling">Stirling</option>
                    </select>
                

                <div>
                    <label>What are you willing to teach?</label>
                        <div><label HTMLfor="beginner">Beginner</label>
                        <input type="checkbox" name="beginner" value="beginner" id="beginner"/>
                        </div>

                        <div><label HTMLfor="elementary">Elementary</label>
                        <input type="checkbox" name="elementary" value="elementary" id="elementary"/>
                        </div>

                        <div><label HTMLfor="pre_intermediate">Pre-Intermediate</label>
                        <input type="checkbox" name="pre_intermediate" value="pre_intermediate" id="pre_intermediate"/>
                        </div>

                        <div><label HTMLfor="intermediate">Intermediate</label>
                        <input type="checkbox" name="intermediate" value="intermediate" id="intermediate"/>
                        </div>

                        <div><label HTMLfor="upper_intermediate">Upper-Intermediate</label>
                        <input type="checkbox" name="upper_intermediate" value="upper_intermediate" id="upper_intermediate"/>
                        </div>
                        
                        <div><label HTMLfor="advanced">Advanced</label>
                        <input type="checkbox" name="advanced" value="advanced" id="advanced"/>
                        </div>

                </div>
                <label HTMLfor="languages_spoken">
                    What languages to do you speak?</label>
                    <input type='text' id='languages_spoken' name="languages_spoken" placeholder="Input languages spoken" />
                
                <div>
                    Select availability:
                        <div><label HTMLfor="mon_fri_day">Mon-Fri Daytime</label>
                        <input type="checkbox" name="mon_fri_day" value="mon_fri_day" id="mon_fri_day"/>
                        </div>

                        <div><label HTMLfor="mon_fri_eve">Mon-Fri Evening</label>
                        <input type="checkbox" name="mon_fri_eve" value="mon_fri_eve" id="mon_fri_eve"/>
                        </div>

                        <div><label HTMLfor="weekend_day">Weekend Daytime</label>
                        <input type="checkbox" name="weekend_day" value="weekend_day" id="weekend_day"/>
                        </div>

                        <div><label HTMLfor="weekend_eve">Weekend Evening</label>
                        <input type="checkbox" name="weekend_eve" value="weekend_eve" id="weekend_eve"/>
                        </div>

                </div>
                
                <input type='submit' value='submit' />
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