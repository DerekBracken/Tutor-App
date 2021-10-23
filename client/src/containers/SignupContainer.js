import { withRouter } from 'react-router-dom';
import Footer from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import MenteeSignupFormComponent from '../components/MenteeSignupFormComponent';
import MentorSignupFormComponent from '../components/MentorSignupFormComponent';

const SignupContainer = () => {

    return(
        <>
        {/* <HeaderComponent/> */}
        {/* conditional dependent on signup radio checkbox for mentor or mentee */}
        <MentorSignupFormComponent/>
        <MenteeSignupFormComponent/>
        <Footer/>
        </>
    )
}
export default withRouter(SignupContainer);