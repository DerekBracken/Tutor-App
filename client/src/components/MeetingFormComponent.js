import { useAuth } from "../contexts/AuthContext";


const MeetingFormComponent = ({allMentees}) => {
    const {currentUser} = useAuth()

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        
        const meeting = {
            date: event.target[0].value.substring(0,10),
            time: event.target[0].value.substring(11,16),
            notes: event.target[1].value,
            meetingLink:event.target[2].value,
            // need to update mentor and mentee to be the object of mentor not just email. 
            mentor: currentUser.email,
            mentee: event.target[3].value
        }
        console.log(meeting);
    }

    // below should loop through the current mentors list of mentees
    const menteeOptions = allMentees.map((mentee, index) =>{
        return <option value={index} key={index}>{mentee.firstName} {mentee.lastName}</option>
    })

    return(
        <>
        <h2>Create new session </h2>
        {/* include date, time, notes, meeting_link, mentor and mentee */}
        <form onSubmit={handleFormSubmit}>

            <label HTMLfor="date_time">Select date and time: </label>
                <input type='datetime-local' id="date_time" name="date_time" required/>

            <label HTMLfor='notes'>What will be discussed? </label>
                <textarea id="notes" name = "notes" placeholder='Enter meeting notes here' />

            <label HTMLfor='meeting_link'>Enter meeting link: </label>
                <input type='url' id='meeting_link' name='meeting_link' placeholder="Meeting URL"/>

            <label HTMLfor="mentee">Choose mentee: </label>
                <select name='mentee' id='mentee' required>
                    <option disabled selected>Select mentee from list below</option>
                    {menteeOptions}
                </select>
            <input type='submit' value='Submit'/>
        </form>


        </>
    )

}

export default MeetingFormComponent;