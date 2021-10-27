import HeaderComponent from "../components/HeaderComponent";
import SessionsList from "../components/SessionsList";
import { withRouter } from 'react-router-dom';
import Footer from "../components/FooterComponent";
import { useState, useEffect } from "react";

const MenteeContainer = ({user}) => {

    if (user != null){
        return(
            <>
            <HeaderComponent/>
            <h3> Mentee Container </h3>
            <SessionsList user={user} />
            <Footer/>
            </>
        )
    }
    return (
        <h3>Cant render</h3>
    )
}

export default withRouter(MenteeContainer);