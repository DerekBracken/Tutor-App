import Service from "../services/service";
import { useAuth } from "../contexts/AuthContext"


const MentorSignupFormComponent = () =>{
    const { currentUser } = useAuth()


    const handlePost = (mentor) => {
        const service = new Service();
        service.post("http://localhost:8080/mentors", mentor)
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
            "languagesSpoken": [event.target[13].value], // make some logic for comma separator
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
        <h1 id="signup-form-heading">Welcome Mentor</h1>
        <h3 id="signup-form-heading">We're very excited to have you on board. Just a few details before we start</h3>
            <form onSubmit={handleFormSubmit} id="mentor-form-container">
                <div className="form-field-container">
                <label  className="mentor-form-label" HTMLfor="first_name">First name:</label> <br/>
                <input className="form-field" type='text' id='first-name' name="first_name" placeholder="Enter first name" /> <br/>
                </div>

                <div className="form-field-container">
                <label className="mentor-form-label" HTMLfor="last_name">Last name:</label> <br/>
                <input className="form-field" type='text' id='last-name' name="last_name" placeholder="Enter last name" /><br/>
                </div>

                <div className="form-field-container">
                <label className="mentor-form-label" HTMLfor='dob'>Enter date of birth:</label><br/>
                <input className="form-field" type="date" id='dob' name='dob'/><br/>
                </div>
                {/* <label>
                will pre-populate with email from Derek's bit

                    Enter email address: 
                    <input type='email' id='email' name='email' placeholder="Enter email address" required/>
                </label> */}
                <div className="form-field-container">
                <label className="mentor-form-label" HTMLfor="contact_number">Enter contact number:</label><br/>
                <input className="form-field" type='tel' id='contact-number' name='contact_number' placeholder="Enter contact number" /><br/>
                </div>  

                <div className="form-field-container">
                <label className="mentor-form-label" HTMLfor="gender">Gender identity:</label><br/>
                    <select  className="form-field" name='gender' id='gender' ><br/>
                    <option disabled selected>Select from below</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <br/>

                <div className="form-field-container">
                <label className="mentor-form-label" HTMLfor="motivation">Why do you want to become a mentor?</label><br/>
                <textarea className="form-field" id='motivation' name='motivation' placeholder='Answer here' /><br/>
                </div>

                <div className="form-field-container">
                <label className="mentor-form-label" HTMLfor="location">Where are you based?</label><br/>
                    <select className="form-field" name='location' id='location' >
                    <option disabled selected>Select from below</option><br/>
                        <option value="Aberdeen">Aberdeen</option>
                        <option value="Dundee">Dundee</option>
                        <option value="Edinburgh">Edinburgh</option>
                        <option value="Glasgow">Glasgow</option>
                        <option value="Inverness">Inverness</option>
                        <option value="Stirling">Stirling</option>
                    </select>
                </div>
                <br/>

                    <div className="form-field-container">
                    <label className="mentor-form-label" >What level would you like to teach?</label>
                        <div>
                            <input  type="checkbox" name="beginner" value="beginner" id="beginner"/>
                            <label className="mentor-form-small-options" HTMLfor="beginner">Beginner</label>
                        </div>

                        <div>
                            <input type="checkbox" name="elementary" value="elementary" id="elementary"/>
                            <label className="mentor-form-small-options" HTMLfor="elementary">Elementary</label>
                        </div>

                        <div>
                            <input type="checkbox" name="pre_intermediate" value="pre_intermediate" id="pre_intermediate"/>
                            <label className="mentor-form-small-options" HTMLfor="pre_intermediate">Pre-Intermediate</label>
                        </div>

                        <div>
                            <input type="checkbox" name="intermediate" value="intermediate" id="intermediate"/>
                            <label className="mentor-form-small-options" HTMLfor="intermediate">Intermediate</label>
                        </div>

                        <div>
                            <input type="checkbox" name="upper_intermediate" value="upper_intermediate" id="upper_intermediate"/>
                            <label className="mentor-form-small-options" HTMLfor="upper_intermediate">Upper-Intermediate</label>
                        </div>
                        
                        <div>
                            <input type="checkbox" name="advanced" value="advanced" id="advanced"/>
                            <label className="mentor-form-small-options" HTMLfor="advanced">Advanced</label>
                        </div>

                </div> <br/>

                    <div className="form-field-container">
                    <label className="mentor-form-label" HTMLfor="languages_spoken"> What languages to do you speak?</label> <br/>
                    <input className="form-field" type='text' id='languages_spoken' name="languages_spoken" placeholder="Input languages spoken" />
                    </div> <br/>

                    <div className="form-field-container">
                    <div className="mentor-form-label"> Select availability:
                        <div>
                            <input type="checkbox" name="mon_fri_day" value="mon_fri_day" id="mon_fri_day"/>
                            <label className="mentor-form-small-options" HTMLfor="mon_fri_day">Mon-Fri Daytime</label>
                        </div>
                        

                        <div>
                            <input type="checkbox" name="mon_fri_eve" value="mon_fri_eve" id="mon_fri_eve"/>
                            <label className="mentor-form-small-options" HTMLfor="mon_fri_eve">Mon-Fri Evening</label>
                        </div>

                        <div>
                            <input type="checkbox" name="weekend_day" value="weekend_day" id="weekend_day"/>
                            <label className="mentor-form-small-options" HTMLfor="weekend_day">Weekend Daytime</label>
                        </div>

                        <div>
                            <input type="checkbox" name="weekend_eve" value="weekend_eve" id="weekend_eve"/>
                            <label className="mentor-form-small-options" HTMLfor="weekend_eve">Weekend Evening</label>
                        </div>
                    </div>
                </div>
                {/* <div className="form-field-container"> */}
                <input className="small-button" type='submit' value='Submit' />
                {/* </div> */}
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