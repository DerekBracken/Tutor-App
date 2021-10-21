import Signup from "../components/authentication/SigninComponent";
import { AuthProvider, useAuth } from "../contexts/AuthContext";



function Authentication() {
  const { currentUser } = useAuth()

  return (
      <div>
        {currentUser && currentUser.email} Has Signed In
      </div>
  );
}

export default Authentication;