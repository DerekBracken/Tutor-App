import "../styles/mentor.css"

const Mentor = ({mentor, user, handleButtonClick}) => {
    console.log("WOOOO", user)

    let matchButton =true;

    if (user.type == "Mentee" && user.mentor){
        if (user.mentor.id == mentor.id){
            matchButton = false
        }
    } 
        // else if (user.type == "Mentee"){
        //         matchButton = true
        // }

    return(
        <>
        <div id="individual-mentor-container">
            <p id="name" > {mentor.firstName} {mentor.lastName}</p>
            {matchButton && <button type="submit" value={mentor.id-1} onClick={handleButtonClick}>Connect with mentor</button>}
            <p id="motivation"> "{mentor.motivation}"</p>
            {/* <div className="row"> */}
                <div className="column1">
                    <div id="optional-info">
                    <p className="mentor-tags">Location</p>  <p className="mentor-info"> {mentor.location}</p> 
                    </div>
                    <div id="optional-info">
                    <p className="mentor-tags">Gender </p> <p className="mentor-info"> {mentor.gender} </p>
                    </div>
                    <div id="optional-info">
                    <p className="mentor-tags">Spoken Languages </p> <p className="mentor-info" > {mentor.languagesSpoken.join(", ")}</p>
                    </div>
                </div>

                <div className="column2">
                    <div id="optional-info">
                    </div>
                    <div id="optional-info">
                    <p className="mentor-tags">Teaching Level</p> <p className="mentor-info"> {mentor.teachingLevel.join(", ")} </p>
                    </div>
                    <div id="optional-info">
                    <p className="mentor-tags">Availability</p> <p className="mentor-info" >{mentor.availability.join(", ")}</p>
                    </div>
                </div>
            {/* </div> */}
        </div>
  
        </>
    )
}

export default Mentor;