import Session from "./Session";
import MeetingFormComponent from "./MeetingFormComponent"

const SessionsList = ({user, allUserMentees}) => {

    return(
        <>
        <h3> Sessions List </h3>
        <MeetingFormComponent user={user} allUserMentees={allUserMentees}/> 
        <Session/>
        </>
    )
}

export default SessionsList;