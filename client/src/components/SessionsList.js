import MeetingFormComponent from "./MeetingFormComponent";
import styles from "../styles/meeting.css";
import HeaderComponent from "./HeaderComponent";

const SessionsList = ({user}) => {
    let meetings;

    if (user && user.meetings.length > 0){
        meetings = user.meetings.map((meeting, index) => {
            // below for nested for loop checks if the date and time of each meeting matches the mentee, if so, it will return the meetings for the given mentee. 
            for (let i = 0; i < user.mentees.length; i++) {
                for (let j = 0; j < user.mentees[i].meetings.length; j++){
                    if (user.mentees[i].meetings[j].time == meeting.time && user.mentees[i].meetings[j].date){
                        return (
                            <>
                                <div className="session-display-container">
                                    <h3 className="session-label"> Session with {user.mentees[i].firstName} {user.mentees[i].lastName}</h3>
                                    <p className="session-notes">Meeting Link: {meeting.meetingLink}</p>
                                    <p className="session-notes">{meeting.notes}</p>
                                    <p className="session-date-time">{meeting.time} on {meeting.date} </p>
                                </div>
                            </>
                        )
                    }
                }
            }
        })
    }

    if (user && user.type == "Mentee"){
        return(
            <>
                <HeaderComponent user={user} />
                <h1> Sessions List </h1>
                {meetings}
            </>
        )}
    return(
        <>
            <HeaderComponent user={user} />
            <MeetingFormComponent user={user} /> 
            {meetings}
        </>
    )
}

export default SessionsList;