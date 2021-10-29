import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import MenteeList from "../components/MenteeList";
import { withRouter } from 'react-router-dom';

const MentorContainer = ({user, allMentees}) => {
    
    if (allMentees != null){  
        return(
            <>
                <HeaderComponent user={user} />
                <h1> Mentor Container</h1>
                <MenteeList allMentees={allMentees} /> 
                <Footer/>
            </>
        )
    }
    return(
        <>
            <HeaderComponent user={user} />
            <h1> Mentor Container </h1>
            <MenteeList />
            <Footer />
        </>
    )
}

export default withRouter(MentorContainer);