import HeaderComponent from "../components/HeaderComponent";
import { withRouter } from 'react-router-dom';
// import LoginComponent from "../components/authentication/LoginComponent";
import "../styles/homepage.css";
import "../styles/button.css";
import Footer from "../components/FooterComponent";
import illustration from "../imagehell/HomePageIllustration.svg"



const HomeContainer = () => {

    //ADD ON CLICK OF SIGN UP BUTTON TAKE TO href="http://localhost:3000/signup"
    return(
        <> 
        <div id="home-page">
        <HeaderComponent/>
        <h1>Connecting Mentors with Learners all over the UK</h1>
            <p id="text-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <button id="SignUp-Button">Sign Up</button>
            
            <img id="home-page-image" alt="pic of people meeting" src={illustration}/>
            
        {/* <LoginComponent/> */}
        <Footer/>
        </div>
        </>
    )
}

export default withRouter(HomeContainer);