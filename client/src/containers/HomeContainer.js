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
            
            <p id="text-description"> <h2>Connecting Mentors with Learners all over the UK</h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.  </p>

            <img id="home-page-image" alt="pic of people meeting" src={illustration}/>
       
        {/* <LoginComponent/> */}
        <Footer/>
        </>
    )
}

export default withRouter(HomeContainer);