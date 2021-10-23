import HeaderComponent from "../components/HeaderComponent";
import { withRouter } from 'react-router-dom';
// import LoginComponent from "../components/authentication/LoginComponent";
import "../styles/homepage.css";
import Footer from "../components/FooterComponent";



const HomeContainer = () => {

    return(

        <>
        <div id="homeheader">
        <HeaderComponent/>
            <div>
                <h1>MeetENG</h1>
            <p>Online English support for non-native English speakers in the UK</p>
            
            </div>
       
        {/* <LoginComponent/> */}
        <Footer/>

        </div>
        </>
    )
}

export default withRouter(HomeContainer);