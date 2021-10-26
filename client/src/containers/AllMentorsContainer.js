import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
// import MatchedMentorList from "../components/MatchedMentorList";
import MentorList from "../components/MentorList";
import { withRouter } from 'react-router-dom';

const AllMentorsContainer = ({user, allMentors}) => {

    return(
        <>
            <HeaderComponent user={user}/>
            <h3> All Mentors Container </h3>
            <MentorList allMentors={allMentors} user={user}/>
            <Footer/>
        </>
    )
}

export default withRouter(AllMentorsContainer);