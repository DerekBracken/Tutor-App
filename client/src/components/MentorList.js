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
        // const service = new Service();
        // service.patch(`http://localhost:8080/mentees/${currentUser.email}`, user);
    }
   
    
    const individualMentor = getTotalScores(user, allMentors, 5,5,5,5,5).map((mentor, index) => {
        // console.log("current mentors: ", mentor);
        return(
            <div>
                <Mentor mentor = {mentor} key = {index}/>
                <button type="submit" value={mentor.id-1} onClick={handleButtonClick}>Connect with mentor</button>
            </div>
        ) 
    })

    const usersMentor = () =>{
        if (user.mentor != null){
            <Mentor mentor = {user.mentor}/>
        } else {
            <h3>No current mentor</h3>
        }
    }
    // const chooseMentor = allMentors.map((mentor, index) => {


        // console.log("This is the mentee: ", user)
        // console.log("This is the mentors: ", allMentors)
        // return (
        //     <div>
        //         <Mentor mentor = {mentor} key = {index}/>
        //         
        //     </div>
        // )
    



    // if (user.type == "Mentee"){ do the below}
    // return(
    //     <>
    //     <h2> I'm the view for mentees</h2> 
    //     {chooseMentor}
    //     </>
    // )

    return(
        <>
            <h1>Your current mentor</h1>
            {<Mentor mentor = {user.mentor}/>}
            <h1>All Mentors </h1>
            {individualMentor}
        </>
    )
}

export default MentorList;