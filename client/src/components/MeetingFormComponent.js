import { useAuth } from "../contexts/AuthContext";
import Service from "../services/service";
import "../styles/session.css"

const MeetingFormComponent = ({user}) => {
    const handlePost = (meeting) => {
        const service = new Service();
        service.post("http://localhost:8080/meetings", meeting)
        .then(() => window.location = '/sessions')
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        
        const meeting = {
            "date": event.target[0].value.substring(0,10),
            "time": event.target[0].value.substring(11,16),
            "notes": event.target[1].value,
            "meetingLink":event.target[2].value.toString(),
            "mentor": user,
            "mentee": user.mentees[parseInt(event.target[3].value)]
        }
        handlePost(meeting) 

    }

    // Below should loop through the current mentors list of mentees
    if (user && user.mentees != null){
    const menteeOptions = user.mentees.map((mentee, index) =>{
        return <option value={index} key={index}>{mentee.firstName} {mentee.lastName}</option>
    })

    return(
        <>
        <h1>Create new session </h1>
        <form className="create-session-container" onSubmit={handleFormSubmit}>
            <div className="session-form-field-container">
                <label className="session-form-label" HTMLfor="date_time">Select date and time: </label>
                <input className="session-form-field" type='datetime-local' id="date_time" name="date_time" required/>
            </div><br/>

            <div className="session-form-field-container">
                <label className="session-form-label" HTMLfor='notes'>What will be discussed? </label>
                <textarea  className="session-form-field"  id="notes" name = "notes" placeholder='Enter meeting notes here' />
            </div><br/>

            <div className="session-form-field-container">
                <label className="session-form-label" HTMLfor='meeting_link'>Enter meeting link: </label>
                <input className="session-form-field"  type='url' id='meeting_link' name='meeting_link' placeholder="Meeting URL"/>
            </div><br/>

            <div className="session-form-field-container" >
            <label className="session-form-label"  HTMLfor="mentee">Choose mentee: </label>
                <select className="session-form-field"  name='mentee' id='mentee' required>
                <option disabled selected>Select mentee from list below</option>
                {menteeOptions}
                </select>
            </div><br/>

            <input className="session-button" type='submit' value='Submit'/>

        </form>
    </>
    )
} 
return(
    <>
        <h1>Create new session </h1>
        <form className="create-session-container" onSubmit={handleFormSubmit}>
            <div className="session-form-field-container">
                <label className="session-form-label" HTMLfor="date_time">Select date and time: </label>
                <input className="session-form-field" type='datetime-local' id="date_time" name="date_time" required/>
            </div><br/>

            <div className="session-form-field-container">
                <label className="session-form-label"  HTMLfor='notes'>What will be discussed? </label>
                <textarea  className="session-form-field" id="notes" name = "notes" placeholder='Enter meeting notes here' />
            </div><br/>

            <div className="session-form-field-container">
                <label className="session-form-label" HTMLfor='meeting_link'>Enter meeting link: </label>
                <input className="session-form-field" type='url' id='meeting_link' name='meeting_link' placeholder="Meeting URL"/>
            </div><br/>

            <div className="session-form-field-container">
                <label className="session-form-label" HTMLfor="mentee">Choose mentee: </label>
                <select className="session-form-field"  name='mentee' id='mentee' required>
                    <option disabled selected>Select mentee from list below</option>
                </select>
            </div><br/>
            
            <input className="session-button" type='submit' value='Submit'/>
            
        </form>
    </>
)
}

export default MeetingFormComponent;