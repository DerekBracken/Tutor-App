import HeaderComponent from "../components/HeaderComponent";
import { withRouter } from 'react-router-dom';
import Footer from "../components/FooterComponent";

const LearningResources = () => {

    const onClickDirect = (event) => (window.open('https://www.bbc.co.uk/learningenglish/'));
    const onClickDirect1 = (event) => (window.open('http://esol.britishcouncil.org/'));
    const onClickDirect2 = (event) => (window.open(' https://lyricstraining.com/'));
    // const onClickDirect3 = (event) => (window.open)

    

    return(
        <>
        <HeaderComponent/>
        <div id="learning-resources-wrapper-block">
            <div id="learning-resources-title">Learning Resources</div>
            <div className="learning-resources-wrapper">
            <div className="learning-resources-img-wrapper">
                <input className='learning-resources-img' type="image" onClick={onClickDirect} src={bbclearningenglish} alt="BBC Learning English"/>
            </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default withRouter(LearningResources);