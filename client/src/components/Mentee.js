import "../styles/mentor.css"

const Mentee = ({mentee}) => {

    return(
        <div id="individual-mentor-container">
            <p id="name" > {mentee.firstName} {mentee.lastName}</p>
            <p id="motivation"> {mentee.aboutMe}</p>
            {/* <div className="row"> */}
                <div className="column1">
                    <div id="optional-info">
                    <p className="mentor-tags">Location</p>  <p className="mentor-info"> {mentee.location}</p> 
                    </div>
                    <div id="optional-info">
                    <p className="mentor-tags">Gender </p> <p className="mentor-info"> {mentee.gender} </p>
                    </div>
                    <div id="optional-info">
                    <p className="mentor-tags">Spoken Languages </p> <p className="mentor-info" > {mentee.languagesSpoken.join(", ")}</p>
                    </div>
                </div>

                <div className="column2">
                    <div id="optional-info">
                    </div>
                    <div id="optional-info">
                    <p className="mentor-tags">English Level</p> <p className="mentor-info"> {mentee.englishLevel} </p>
                    </div>
                    <div id="optional-info">
                    <p className="mentor-tags">Availability</p> <p className="mentor-info" >{mentee.availability.join(", ")}</p>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Mentee;