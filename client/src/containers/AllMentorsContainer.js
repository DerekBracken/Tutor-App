import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
// import MatchedMentorList from "../components/MatchedMentorList";
import MentorList from "../components/MentorList";
import { withRouter } from 'react-router-dom';
import { useEffect, useState } from "react";


const AllMentorsContainer = ({user, allMentors}) => {

    console.log('1, 2', allMentors)
    console.log('2', user);

    
    // 2 step fetch process, first gets the id's of the people passing to second fetch which gets their availability
    // const getAvailabilities = function() {
    //     fetch("http://localhost:8080/availability/mentors/{id}")
    //     .then(res => res.json())
    // }



    // if (allMentors != null && user != null){
        return(
            <>
                <HeaderComponent/>
                <h3> All Mentors Container </h3>
                <MentorList allMentors={allMentors} user={user}/>
                <Footer/>
            </>
        )
    }

    // return(
    //     <>
    //     <h3> All Mentors Container </h3>
    //     <HeaderComponent/>
    //     <MentorList allMentors = {allMentors}/>
    //     <Footer/>
        
    //     </>
    // )


export default withRouter(AllMentorsContainer);