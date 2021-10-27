import { useAuth } from "../contexts/AuthContext";
import {useState, useEffect} from 'react'
import Service from "../services/service";



const MeetingFormComponent = ({user}) => {
    const {currentUser} = useAuth()


    const handlePost = (meeting) => {
        const service = new Service();
        service.post("http://localhost:8080/meetings", meeting)
        //    .then(() => window.location = '/profile')
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        
        const meeting = {
            "date": event.target[0].value.substring(0,10),
            "time": event.target[0].value.substring(11,16),
            "notes": event.target[1].value,
            "meetingLink":event.target[2].value,
            "mentor": user,
            "mentee": user.mentees[parseInt(event.target[3].value)]
        }

        handlePost(meeting) 

    }

    // below should loop through the current mentors list of mentees
    if (user && user.mentees.length > 0){
        console.log("HHHHHHH", user.mentees);
    const menteeOptions = user.mentees.map((mentee, index) =>{
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
            </select>
        <input type='submit' value='Submit'/>
    </form>


    </>
)
}

export default MeetingFormComponent;