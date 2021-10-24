import Session from "./Session";
import MeetingFormComponent from "./MeetingFormComponent"

const SessionsList = ({allMentees}) => {

    return(
        <>
        <h3> Sessions List </h3>
        <MeetingFormComponent allMentees={allMentees}/> 
        <Session/>
        </>
    )
}

export default SessionsList;