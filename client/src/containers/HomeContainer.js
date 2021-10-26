import HeaderComponent from "../components/HeaderComponent";
import { withRouter } from 'react-router-dom';
// import LoginComponent from "../components/authentication/LoginComponent";
import "../styles/homepage.css";
import "../styles/button.css";
import Footer from "../components/FooterComponent";
import illustration from "../imagehell/HomePageIllustration.svg";
import { useHistory } from "react-router";

const HomeContainer = ({user}) => {

    const history = useHistory();

    //ADD ON CLICK OF SIGN UP BUTTON TAKE TO href="http://localhost:3000/signup"
    const handleSignUpButton  = () => {
        history.push('/signup')
    }

    return(
        <div id="home-page">

        <HeaderComponent user={user}/>
          <div id="home-layout">
            <h1 id="text-description"> <h4>Connecting Mentors with Learners all over the UK</h4>
                <h5 id="main-paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</h5>
                <button id="SignUp-Button" onClick={handleSignUpButton}>Sign Up</button>
             </h1> 
                <img id="home-page-image" alt="pic of people meeting" src={illustration}/>
           </div>
          {/* <LoginComponent/> */}
          <Footer/>
          
        </div>
    )
}

export default withRouter(HomeContainer);