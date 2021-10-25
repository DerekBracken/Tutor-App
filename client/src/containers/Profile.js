import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import PersonalInformation from "../components/PersonalInformation";
import { withRouter } from 'react-router-dom';

const Profile = ({user}) => {

    return(
        <>
        <h2> Profile {user.firstName}</h2>
        <HeaderComponent/>
        <PersonalInformation/>
        <Footer/>
        </>
    )
}
export default withRouter(Profile);