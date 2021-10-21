import HeaderComponent from "../components/HeaderComponent";
import { withRouter } from 'react-router-dom';
import Footer from "../components/FooterComponent";

const LearningResources = () => {
    

    return(
        <>
        <h3> Learning Resources Container </h3>
        <HeaderComponent/>
        <Footer/>
        </>
    )
}

export default withRouter(LearningResources);