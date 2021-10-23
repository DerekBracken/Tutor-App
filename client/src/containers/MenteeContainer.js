import HeaderComponent from "../components/HeaderComponent";
import SessionsList from "../components/SessionsList";
import { withRouter } from 'react-router-dom';
import Footer from "../components/FooterComponent";

const MenteeContainer = () => {
    

    return(
        <>
        <h3> Mentee Container </h3>
        <HeaderComponent/>
        <SessionsList/>
        <Footer/>
        </>
    )
}

export default withRouter(MenteeContainer);