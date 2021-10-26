import Mentor from "./Mentor";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Service from "../services/service";
import getTotalScores from "../models/Matchmaking";


const MentorList = ({allMentors}) => {
    const {currentUser} = useAuth()
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
    
    }, [])

    const getUser = function() {
        fetch(`http://localhost:8080/mentees?email=${currentUser.email}`)
        .then(res => res.json())
        .then(user => setUser(user))
    }   
    // We need to have two views, one depending on if the person signed in is a type mentee or other. The mentee will be able to see the choose mentor. Everyone else will just see a list.

    const handlePut = (user) => {
        const service = new Service();
        service.put(`http://localhost:8080/mentees/${currentUser.email}`, user)   
    }

    const handleButtonClick = (event) =>{
        event.preventDefault();
        
        user.mentor = allMentors[parseInt(event.target.value)]
        console.log("user object:", user);
        handlePut(user)
        // const service = new Service();
        // service.patch(`http://localhost:8080/mentees/${currentUser.email}`, user);
    }

    const individualMentor = allMentors.map((mentor, index) => {
        return (
            <>
                <Mentor mentor = {mentor} key = {index}/>
            </>
        )
    })
   if (user === null){
       return <h1>hello</h1>
   }
   
    const chooseMentor = allMentors.map((mentor, index) => {

        getTotalScores(user, allMentors, 5,5,5,5,5)
        // console.log("This is the mentee: ", user)
        // console.log("This is the mentors: ", allMentors)
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