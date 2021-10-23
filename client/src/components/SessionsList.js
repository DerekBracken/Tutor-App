import Session from "./Session";
import MeetingFormComponent from "./MeetingFormComponent"

const SessionsList = () => {

    return(
        <>
        <h3> Sessions List </h3>
        <MeetingFormComponent/> 
        <Session/>
        </>
    )
}

export default SessionsList;