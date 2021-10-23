import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import MatchedMentorList from "../components/MatchedMentorList";
import MentorList from "../components/MentorList";
import { withRouter } from 'react-router-dom';
import { useEffect, useState } from "react";


const AllMentorsContainer = () => {

    const [allMentors, setAllMentors] = useState(null);
    const [teachingLevel, setTeachingLevel] = useState(null);

    useEffect(() => {
        getAllMentors();
        console.log(allMentors)
    },[])

    const getAllMentors = function() {
        fetch("http://localhost:8080/mentors")
        .then(res => res.json())
        .then(allMentors => setAllMentors(allMentors))
    }

    // 2 step fetch process, first gets the id's of the people passing to second fetch which gets their availability
    // const getAvailabilities = function() {
    //     fetch("http://localhost:8080/availability/mentors/{id}")
    //     .then(res => res.json())
    // }



    if (allMentors !=null){
        return(
            <>
                <h3> All Mentors Container </h3>
                <HeaderComponent/>
                <MentorList allMentors = {allMentors}/>
                <MatchedMentorList allMentors = {allMentors}/>
                <Footer/>
            
                {/* <p>{allMentors[0].languagesSpoken} {allMentors[0].lastName}</p> */}
            </>
        )
    }

    return(
        <>
        <h3> All Mentors Container </h3>
        <HeaderComponent/>
        <MatchedMentorList/>
        <Footer/>
        
        </>
    )

}

export default withRouter(AllMentorsContainer);