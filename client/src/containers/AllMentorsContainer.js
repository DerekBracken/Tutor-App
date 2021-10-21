import HeaderComponent from "../components/HeaderComponent";
import MatchedMentorList from "../components/MatchedMentorList";
import { withRouter } from 'react-router-dom';
import { useEffect, useState } from "react";

const AllMentorsContainer = () => {

    const [allMentors, setAllMentors] = useState(null);

    useEffect(() => {
        getAllMentors();
    },[])

    const getAllMentors = function() {
        fetch("http://localhost:8080/mentors")
        .then(res => res.json())
        .then(allMentors => setAllMentors(allMentors))
        .then(console.log(allMentors))
    }

    return(
        <>
        <h3> All Mentors Container </h3>
        <HeaderComponent/>
        <MatchedMentorList/>
        
        </>
    )

}

export default withRouter(AllMentorsContainer);