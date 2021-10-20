import HeaderComponent from "../components/HeaderComponent";
import SessionsList from "../components/SessionsList";
import { withRouter } from 'react-router-dom';

const MenteeContainer = () => {
    

    return(
        <>
        <h3> Mentee Container </h3>
        <HeaderComponent/>
        <SessionsList/>
        </>
    )
}

export default withRouter(MenteeContainer);