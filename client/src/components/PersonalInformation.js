import { AuthProvider, useAuth } from "../contexts/AuthContext";

const PersonalInformation = () => {
    const { currentUser } = useAuth()


    return (
        <div>
          {currentUser && currentUser.email} Has Signed In
        </div>
    );
  }

export default PersonalInformation;