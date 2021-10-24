import HeaderComponent from "../components/HeaderComponent";
import { withRouter } from 'react-router-dom';
import Footer from "../components/FooterComponent";
import "../style/LearningResources.css"
const LearningResources = () => {

    const onClickDirect = (event) => (window.open('https://www.bbc.co.uk/learningenglish/'));
    const onClickDirect1 = (event) => (window.open('http://esol.britishcouncil.org/'));
    const onClickDirect2 = (event) => (window.open(' https://lyricstraining.com/'));
    const onClickDirect3 = (event) => (window.open('https://ororo.tv/en'));
    const onClickDirect4 = (event) => (window.open('https://quizlet.com/'));

    

    return(
        <>
        <HeaderComponent/>

        <h1>Learning Resources</h1>

        <div id="learning-resources-wrapper-block">
            <div className="learning-resources-wrapper">
            <div className="learning-resources-img-wrapper">
                <input className='learning-resources-img' type="image" onClick={onClickDirect} src={`../image/bbclearnenglish.png`} alt="BBC Learning English Webpage Image"/>
            </div>
            <div className="learning-resources-name">
                <h3>BBC Learning English</h3>
            </div>
           

            <div className="learning-resources-wrapper -2">
            <div className="learning-resources-img-wrapper">
                <input className='learning-resources-img' type="image" onClick={onClickDirect1} src={`../image/britishcouncil.png`} alt="British Council Webpage Image"/>
            </div>
            <div className="learning-resources-name">
                <h3>British Council</h3>
            </div>
            </div>

            <div className="learning-resources-wrapper-2">
            <div className="learning-resources-img-wrapper">
                <input className='learning-resources-img' type="image" onClick={onClickDirect2} src={`../image/lyrics.png`} alt="Lyrics Webpage Image"/>
            </div>
            <div className="learning-resources-name">
                <h3>Learn English with Music</h3>
            </div>
            </div>

            <div className="learning-resources-wrapper-2">
            <div className="learning-resources-img-wrapper">
                <input className='learning-resources-img' type="image" onClick={onClickDirect3} src={`../image/ororo.png`} alt="Ororo Webpage Image"/>
            </div>
            <div className="learning-resources-name">
                <h3>Learn English with TV</h3>
            </div>
            </div>

            <div className="learning-resources-wrapper-2">
            <div className="learning-resources-img-wrapper">
                <input className='learning-resources-img' type="image" onClick={onClickDirect4} src={`../image/quizlet.png`} alt="Quizlet Webpage Image"/>
            </div>
            <div className="learning-resources-name">
                <h3>Learn English with Quizlet</h3>
            </div>
            </div>

            </div>

        </div>

        <br></br>

        <Footer/>
        </>
    )
}

export default withRouter(LearningResources);