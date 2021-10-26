import HeaderComponent from "../components/HeaderComponent";
import SessionsList from "../components/SessionsList";
import { withRouter } from 'react-router-dom';
import Footer from "../components/FooterComponent";
import { useState, useEffect } from "react";

const MenteeContainer = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
                getUser();
                console.log(user);
    }, [])

    const getUser = function() {
        // fetch(`http://localhost:8080/mentees?email=${currentUser.email}`)
        fetch(`http://localhost:8080/mentors?email=duncan.soutter@gmail.com`)
        .then(res => res.json())
        .then(user => setUser(user))
    }

    if (user != null){
        return(
            <>
            <h3> Mentee Container </h3>
            <HeaderComponent/>
            <SessionsList user={user} />
            <Footer/>
            </>
        )
    }
    return (
        <h3>Cant render</h3>
    )
}

export default withRouter(MenteeContainer);