import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import PersonalInformation from "../components/PersonalInformation";
import { withRouter } from 'react-router-dom';

const Profile = ({user}) => {

    if (user== null) {
        return 'Loading...'
      }

    console.log("profile prop user",user);

    return(
        <>
        <HeaderComponent user={user}/>
        <PersonalInformation user={user}/>
        <Footer/>
        </>
    )
}
export default withRouter(Profile);