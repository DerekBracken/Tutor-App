import "../styles/mentor.css"

const Mentor = ({mentor}) => {

    return(
        <>
       
        <div id="individual-mentor-container">
            <p id="name" > {mentor.firstName} {mentor.lastName}</p>
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
                    <p className="mentor-tags">Spoken Languages </p> <p className="mentor-info" > {mentor.languagesSpoken}</p>
                    </div>
                </div>

                <div className="column2">
                    <div id="optional-info">
                    </div>
                    <div id="optional-info">
                    <p className="mentor-tags">Teaching Level</p> <p className="mentor-info"> {mentor.teachingLevel} </p>
                    </div>
                    <div id="optional-info">
                    <p className="mentor-tags">Availability</p> <p className="mentor-info" >{mentor.availability}</p>
                    </div>
                </div>
            {/* </div> */}
        </div>
  
        </>
    )
}

export default Mentor;