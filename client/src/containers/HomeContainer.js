import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import { withRouter } from 'react-router-dom';

const HomeContainer = () => {

    return(
        <>
        <HeaderComponent/>
        <FooterComponent/>
        </>
    )
}

export default withRouter(HomeContainer);