import Session from "./Session";
import MeetingFormComponent from "./MeetingFormComponent"

const SessionsList = ({user}) => {

    const meetings = user.meetings.map((meeting, index) => {
        return <h2>{meeting.notes}</h2>
    })

    return(
        <>
        <h3> Sessions List </h3>
        <MeetingFormComponent user={user} /> 
        {meetings}
        </>
    )
}

export default SessionsList;