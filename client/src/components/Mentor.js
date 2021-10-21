const Mentor = ({mentor}) => {

    

    return(
        <>
        <p>Name: {mentor.firstName} {mentor.lastName}, Email: {mentor.email}, Reason for joining service: {mentor.motivation}, Location: {mentor.location}, Gender: {mentor.gender} </p>
        </>
    )
}

export default Mentor;