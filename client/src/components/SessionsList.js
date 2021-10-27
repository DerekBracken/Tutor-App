import Session from "./Session";
import MeetingFormComponent from "./MeetingFormComponent";
import styles from "../styles/meeting.css"
import HeaderComponent from "./HeaderComponent";

const SessionsList = ({user}) => {
    let meetings;

    if (user && user.meetings.length > 0){
        meetings = user.meetings.map((meeting, index) => {
            // below for nested for loop checks if the date and time of each meeting matches the mentee, if so, it 
            for (let i = 0; i < user.mentees.length; i++) {
                for (let j = 0; j < user.mentees[i].meetings.length; j++){
                    if (user.mentees[i].meetings[j].time == meeting.time && user.mentees[i].meetings[j].date){
                        return (
                            <>
                            <div className="meeting-component">
                                <h3>Meeting on {meeting.date} at {meeting.time} with {user.mentees[i].firstName} {user.mentees[i].lastName}</h3>
                                <p>{meeting.notes}</p>
                            </div>
                                {/* <h2>{meeting.mentee.firstName}</h2> */}
                            </>
                            )
                    }
                }
            }

            return (
            <>
                <HeaderComponent user={user}/>
            <div className="meeting-component">
                <h3>Meeting on {meeting.date} at {meeting.time} with X</h3>
                <p>{meeting.notes}</p>
            </div>
            </>
            )
        })
    }

    return(
        <>
        <HeaderComponent user={user}/>
        <h3> Sessions List </h3>
        <MeetingFormComponent user={user} /> 
        {meetings}
        </>
    )
}

export default SessionsList;