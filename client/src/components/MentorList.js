import Mentor from "./Mentor";
import Service from "../services/service";
import getTotalScores from "../models/Matchmaking";

const MentorList = ({allMentors, user}) => {

    if (allMentors === null) {
        return 'Loading'
      }
    
    const handlePut = (user) => {
        const service = new Service();
        service.put(`http://localhost:8080/mentees/${user.email}`, user)   
    }

    const handleButtonClick = (event) => {
        event.preventDefault();
        user.mentor = allMentors[parseInt(event.target.value)]
        handlePut(user)
        window.location = '/view-mentors'
    }

    let individualMentor;
    
    if (user != null && user.type != "Mentor") {
        individualMentor = getTotalScores(user, allMentors, 5,5,5,5,5).map((mentor, index) => {
        return (
            <div>
                <Mentor mentor = {mentor} key = {index} user={user} handleButtonClick={handleButtonClick} />
            </div>
        ) 
    })} else {
            individualMentor = allMentors.map((mentor, index) => {
            return <Mentor mentor = {mentor} key = {index} user={user} handleButtonClick={handleButtonClick} />
        })}

    if (user && user.type != "Mentor" && user.mentor != null) {
        return (
            <>
            <h1> Your current mentor </h1>
            <Mentor mentor = {user.mentor} user={user} handleButtonClick={handleButtonClick} />
            <h1> All Mentors </h1>
            {individualMentor}
            </>
        ) 
    }
    return (
        <>
            <h1> All Mentors </h1>
            {individualMentor}
        </>
    )
}

export default MentorList;