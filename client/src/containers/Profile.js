import HeaderComponent from "../components/HeaderComponent";
import PersonalInformation from "../components/PersonalInformation";
import { withRouter } from 'react-router-dom';

const Profile = () => {

    return(
        <>
        <h2> Profile</h2>
        <HeaderComponent/>
        <PersonalInformation/>
        </>
    )
}
export default withRouter(Profile);