import Mentor from "./Mentor";

const MentorList = ({allMentors}) => {

    const individualMentor = allMentors.map((mentor, index) => {
        return (
            <>
                <Mentor mentor = {mentor} key = {index}/>
                <button type="button">Hello</button>
            </>
        )
    })

    return(
        <>
        <h2> I'm the Mentor List </h2> 
        <p>{allMentors[0].firstName}</p>
        {individualMentor}
        </>
    )
}

export default MentorList;