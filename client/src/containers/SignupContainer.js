import { withRouter } from 'react-router-dom';
import MenteeSignupFormComponent from '../components/MenteeSignupFormComponent';
import MentorSignupFormComponent from '../components/MentorSignupFormComponent';

const SignupContainer = () => {

    return(
        <>
        {/* conditional dependent on signup radio checkbox for mentor or mentee */}
        <MentorSignupFormComponent/>
        <MenteeSignupFormComponent/>
        </>
    )
}
export default withRouter(SignupContainer);