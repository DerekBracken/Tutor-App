import Mentor from "./Mentor";
import { useState, useEffect } from "react";



const MentorList = ({allMentors}) => {

    // We need to have two views, one depending on if the person signed in is a type mentee or other. The mentee will be able to see the choose mentor. Everyone else will just see a list.


    const handleButtonClick = (event) =>{
        event.preventDefault();
        console.log(event)
        const mentor = { "mentor" : allMentors[parseInt(event.target.value)]}
        console.log(mentor)
    }
    const individualMentor = allMentors.map((mentor, index) => {
        return (
            <>
                <Mentor mentor = {mentor} key = {index}/>
            </>
        )
    })
    
    const chooseMentor = allMentors.map((mentor, index) => {
        return (
            <div>
                <Mentor mentor = {mentor} key = {index}/>
                <button type="submit" value={index} onClick={handleButtonClick}>Connect with mentor</button>
            </div>
        )
    })

    // if (user.type == "Mentee"){ do the below}
    return(
        <>
        <h2> I'm the view for mentees</h2> 
        {chooseMentor}
        </>
    )

    return(
        <>
            <h2>I'm the view for everyone else</h2>
            {individualMentor}
        </>
    )
}

export default MentorList;