import "../styles/mentor.css"

const Mentor = ({mentor}) => {

    return(
        <>
        <div id="individual-mentor-container">
            <h4 id="name" > {mentor.firstName} {mentor.lastName}</h4>
            <h4 id="motivation"> "{mentor.motivation}"</h4>
                <div id="optional-info">
                    <h4 className="mentor-tags">Location</h4>  <h4 className="mentor-info"> {mentor.location}</h4> 
                </div>
                <div id="optional-info">
                    <h4 className="mentor-tags">Gender </h4> <h4 className="mentor-info"> {mentor.gender} </h4>
                    </div>
                    <div id="optional-info">
                    <h4 className="mentor-tags">Spoken Languages </h4> <h4 className="mentor-info" > {mentor.languagesSpoken}</h4>
                    </div>
                    <div id="optional-info">
                    </div>
                    <div id="optional-info">
                    <h4 className="mentor-tags">Teaching Level</h4> <h4 className="mentor-info"> {mentor.teachingLevel} </h4>
                    </div>
                    <div id="optional-info">
                    <h4 className="mentor-tags">Availability</h4> <h4 className="mentor-info" >{mentor.availability}</h4>
                    </div>
               
        </div>
        
        </>
    )
}

export default Mentor;