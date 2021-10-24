import HeaderComponent from "../components/HeaderComponent";
import { withRouter } from 'react-router-dom';
// import LoginComponent from "../components/authentication/LoginComponent";
import "../styles/homepage.css";
import Footer from "../components/FooterComponent";
import illustration from "../imagehell/HomePageIllustration.svg"



const HomeContainer = () => {

    return(
        <>
        <HeaderComponent/>
            <div id="home-page">
                
            <p>Online English support for non-native English speakers in the UK</p>
   
            </div>

            <img id="home-page-image" alt="pic of people meeting" src={illustration}/>
       
        {/* <LoginComponent/> */}
        <Footer/>

        
        </>
    )
}

export default withRouter(HomeContainer);