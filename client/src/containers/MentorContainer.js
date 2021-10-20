import Calendar from "../components/Calendar";
import HeaderComponent from "../components/HeaderComponent";
import MenteeList from "../components/MenteeList";
import { withRouter } from 'react-router-dom';

const MentorContainer = () => {
    
    
    return(
        <>
        <h1> Mentor Container</h1>
        <HeaderComponent/>
        <MenteeList/>
        <Calendar/>
        </>
    )
}

export default withRouter(MentorContainer);