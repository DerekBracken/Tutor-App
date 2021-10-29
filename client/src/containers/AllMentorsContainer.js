import HeaderComponent from "../components/HeaderComponent";
import MentorList from "../components/MentorList";
import { withRouter } from 'react-router-dom';

const AllMentorsContainer = ({user, allMentors}) => {

    return(
        <>
            <HeaderComponent user={user}/>
            <MentorList allMentors={allMentors} user={user}/>  
        </>
    )
}

export default withRouter(AllMentorsContainer);