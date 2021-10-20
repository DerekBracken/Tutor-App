import HeaderComponent from "../components/HeaderComponent";
import MatchedMentorList from "../components/MatchedMentorList";
import { withRouter } from 'react-router-dom';

const AllMentorsContainer = () => {

    return(
        <>
        <h3> All Mentors Container </h3>
        <HeaderComponent/>
        <MatchedMentorList/>
        
        </>
    )

}

export default withRouter(AllMentorsContainer);