import Calendar from "../components/Calendar";
import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import MenteeList from "../components/MenteeList";
import { withRouter } from 'react-router-dom';
import { useEffect, useState } from "react";

const MentorContainer = () => {
    
    const [allMentees, setAllMentees] = useState(null);

    useEffect(() => {
        getAllMentees();
    },[])

    const getAllMentees = function() {
        fetch("http://localhost:8080/mentees")
        .then(res => res.json())
        .then(allMentees => setAllMentees(allMentees))
    }

    if (allMentees != null){
        
        return(
            <>
            <h1> Mentor Container</h1>
            <HeaderComponent/>
          
            <MenteeList allMentees={allMentees}/>
            </>
        )
    }
    return(
        <>
        <h1> Mentor Container</h1>
        <HeaderComponent/>

        <MenteeList/>
        <Calendar/>
        <Footer/>
        </>
    )
}

export default withRouter(MentorContainer);