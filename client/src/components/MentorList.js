import Mentor from "./Mentor";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Service from "../services/service";
import getTotalScores from "../models/Matchmaking";


const MentorList = ({allMentors, user}) => {
    const {currentUser} = useAuth()

    
    if (allMentors === null) {
        return 'Loading'
      }
    
    // We need to have two views, one depending on if the person signed in is a type mentee or other. The mentee will be able to see the choose mentor. Everyone else will just see a list.

    const handlePut = (user) => {
        const service = new Service();
        service.put(`http://localhost:8080/mentees/${currentUser.email}`, user)   
    }

    const handleButtonClick = (event) =>{
        event.preventDefault();
        user.mentor = allMentors[parseInt(event.target.value)]
        handlePut(user)
        window.location = '/view-mentors'
    }
    let individualMentor;
    if (user != null && user.type != "Mentor"){
        individualMentor = getTotalScores(user, allMentors, 5,5,5,5,5).map((mentor, index) => {
        return(
            <div>
                <Mentor mentor = {mentor} key = {index}/>
                <button type="submit" value={mentor.id-1} onClick={handleButtonClick}>Connect with mentor</button>
            </div>
        ) 
    })} else {
            individualMentor = allMentors.map((mentor, index) => {
            return <Mentor mentor = {mentor} key = {index}/>
        })}


    if (user && user.type != "Mentor" && user.mentor != null){
        return(
            <>
                <h1>Your current mentor</h1>
                <Mentor mentor = {user.mentor}/>
                <h1>All Mentors </h1>
                {individualMentor}
            </>
        ) 
    }
    return(
        <>
            <h1>All Mentors </h1>
            {individualMentor}
        </>
    )
}

export default MentorList;