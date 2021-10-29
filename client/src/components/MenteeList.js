import Mentee from "./Mentee";

const MenteeList = ({allMentees}) => {

    return (
        <>
            <h3> Mentee List </h3>
            <Mentee allMentees={allMentees} />
        </>
    )
}

export default MenteeList;