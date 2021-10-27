import { withRouter } from 'react-router-dom';
import Footer from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';


const HowItWorksContainer = ({user}) => {

    return(
        <>
        <HeaderComponent user={user}/>

       <h1>How MeetEng Works</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>

        <Footer/>
        </>
    )
}

export default withRouter(HowItWorksContainer);