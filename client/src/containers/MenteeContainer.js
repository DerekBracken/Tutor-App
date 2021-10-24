import HeaderComponent from "../components/HeaderComponent";
import SessionsList from "../components/SessionsList";
import { withRouter } from 'react-router-dom';
import Footer from "../components/FooterComponent";
import { useState, useEffect } from "react";

const MenteeContainer = () => {
    const [user, setUser] = useState(null);
    const [allUserMentees, setAllUserMentees] = useState(null);

    useEffect(() => {
                getUser();
                console.log(user);
                getAllUserMentees();
    }, [])

    const getUser = function() {
        // fetch(`http://localhost:8080/mentees?email=${currentUser.email}`)
        fetch(`http://localhost:8080/mentors?email=johny@gmail.com`)
        .then(res => res.json())
        .then(user => setUser(user))
    }


    const getAllUserMentees = function() {
        fetch(`http://localhost:8080/mentees`)
        .then(res => res.json())
        .then(allUserMentees => setAllUserMentees(allUserMentees))
    }


    if (allUserMentees != null){
    return(
        <>
        <h3> Mentee Container </h3>
        <HeaderComponent/>
        <SessionsList user={user} allUserMentees={allUserMentees}/>
        <Footer/>
        </>
    )}

    return (
        <h1>No Mentees</h1>
    )
}

export default withRouter(MenteeContainer);