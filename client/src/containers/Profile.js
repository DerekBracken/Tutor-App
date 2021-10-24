import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import PersonalInformation from "../components/PersonalInformation";
import { withRouter } from 'react-router-dom';

const Profile = () => {

    return(
        <>
        <h2> Profile</h2>
        <HeaderComponent/>
        <PersonalInformation/>
        <Footer/>
        </>
    )
}
export default withRouter(Profile);