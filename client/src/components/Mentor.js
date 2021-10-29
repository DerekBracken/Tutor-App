import "../styles/mentor.css"

const Mentor = ({mentor, user, handleButtonClick}) => {
    
    let matchButton = false;

    if (user && user.type == "Mentee"){
        if (user.mentor == null){
            matchButton = true
        } else if (user.mentor.id != mentor.id){
            matchButton = true
        }
    } 

    return(
        <>
            <div id="individual-mentor-container">
                <div id="mentor-headline">
                    <p id="name" > {mentor.firstName} {mentor.lastName}</p>
                    {matchButton && <button  className="connect-with-mentor"type="submit" value={mentor.id-1} onClick={handleButtonClick}>Connect</button>} </div>
                    <p id="motivation"> "{mentor.motivation}"</p>

                    <div className="column1">
                        <div id="optional-info">
                            <p className="mentor-tags">Location</p>  <p className="mentor-info"> {mentor.location} </p> 
                        </div>
                        <div id="optional-info">
                            <p className="mentor-tags">Gender </p> <p className="mentor-info"> {mentor.gender} </p>
                        </div>
                        <div id="optional-info">
                            <p className="mentor-tags">Spoken Languages </p> <p className="mentor-info" > {mentor.languagesSpoken.join(", ")} </p>
                        </div>
                    </div>

                    <div className="column2">
                        <div id="optional-info">
                            <p className="mentor-tags">Teaching Level</p> <p className="mentor-info"> {mentor.teachingLevel.join(", ")} </p>
                        </div>
                        <div id="optional-info">
                            <p className="mentor-tags">Availability</p> <p className="mentor-info" >{mentor.availability.join(", ")} </p>
                        </div>
                    </div>
            </div>  
        </>
    )
}

export default Mentor;