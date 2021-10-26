import { withRouter } from 'react-router-dom';
import Footer from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';


const HowItWorksContainer = () => {

    return(
        <>
        <HeaderComponent/>

        <p>I am the How It Works Container</p>

        <Footer/>
        </>
    )
}

export default withRouter(HowItWorksContainer);