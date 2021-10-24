import HeaderComponent from "../components/HeaderComponent";
import SessionsList from "../components/SessionsList";
import { withRouter } from 'react-router-dom';
import Footer from "../components/FooterComponent";
import { useState, useEffect } from "react";

const MenteeContainer = () => {
    
    const [allMentees, setAllMentees] = useState(null);

    useEffect(() => {
        getAllMentees();
        console.log(allMentees)
    }, [])

    const getAllMentees = function() {
        fetch("http://localhost:8080/mentees")
        .then(res => res.json())
        .then(allMentees => setAllMentees(allMentees))
    }


    if (allMentees != null){
    return(
        <>
        <h3> Mentee Container </h3>
        <HeaderComponent/>
        <SessionsList allMentees={allMentees}/>
        <Footer/>
        </>
    )}

    return (
        <h1>No Mentees</h1>
    )
}

export default withRouter(MenteeContainer);