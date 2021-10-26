import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

const PersonalInformation = ({user}) => {
    const { currentUser } = useAuth()

    return (
        <div>
          {currentUser && currentUser.email} Has Signed In
          <br/>
          {user && user.firstName} is my name 
        </div>
    );
  }

export default PersonalInformation;