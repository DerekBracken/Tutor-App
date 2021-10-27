import HeaderComponent from "../components/HeaderComponent";
import { withRouter } from 'react-router-dom';
import Footer from "../components/FooterComponent";
import "../styles/learning_resources.css"
const LearningResources = ({user}) => {

    const onClickDirect = (event) => (window.open('https://www.bbc.co.uk/learningenglish/'));
    const onClickDirect1 = (event) => (window.open('http://esol.britishcouncil.org/'));
    const onClickDirect2 = (event) => (window.open(' https://lyricstraining.com/'));
    const onClickDirect3 = (event) => (window.open('https://ororo.tv/en'));
    const onClickDirect4 = (event) => (window.open('https://quizlet.com/'));

    return(
        <>
      
        <HeaderComponent user={user}/>

        <h1>Learning Resources</h1>

        <div id="learning-resources-wrapper-block">
            <div className="container">
            <img className='learning-resources-img' type="image" onClick={onClickDirect} src={`../image/bbclearnenglish.png`} alt="BBC Learning English Webpage Image"/>
            <h3 className="resources-name">BBC Learning English</h3>
            </div>
        
            <div className="container">
            <img className='learning-resources-img' type="image" onClick={onClickDirect1} src={`../image/britishcouncil.png`} alt="British Council Webpage Image"/>
            <h3 className="resources-name">British Council</h3>
            </div>

            <div className="container">
            <img className='learning-resources-img' type="image" onClick={onClickDirect2} src={`../image/lyrics.png`} alt="Lyrics Webpage Image"/>
            <h3 className="resources-name">Learn English with Music</h3>
            </div>

            <div className="container">
            <img className='learning-resources-img' type="image" onClick={onClickDirect3} src={`../image/ororo.png`} alt="Ororo Webpage Image"/>
            <h3 className="resources-name">Learn English with TV</h3>
            </div>

            <div className="container">
            <img className='learning-resources-img' type="image" onClick={onClickDirect4} src={`../image/quizlet.png`} alt="Quizlet Webpage Image"/>
            <h3 className="resources-name">Learn English with Quizlet</h3>
            </div>
        
        </div>
        <Footer/>
        </>
    )
}

export default withRouter(LearningResources);