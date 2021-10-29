import HeaderComponent from "../components/HeaderComponent";
import SessionsList from "../components/SessionsList";
import { withRouter } from 'react-router-dom';
import Footer from "../components/FooterComponent";
import Mentee from "../components/Mentee"

// Work in progress, need to add session list to this container. Currently only visible as a Mentor.

const MenteeContainer = ({user}) => {

    if (user != null){
        if (user.mentees != null){
            const mentees = user.mentees.map((mentee, index) => {
                return <Mentee mentee={mentee} key={index} />
            })
            
            return(
                <>
                    <HeaderComponent user={user} />
                    <h1> My Mentees </h1>
                    {mentees}
                    <Footer/>
                </>
            )
        }}
        
    return (
        <>
            <HeaderComponent user={user}/>
            <h1> No Connected Mentees </h1>
            <Footer />
        </>
    )
}

export default withRouter(MenteeContainer);