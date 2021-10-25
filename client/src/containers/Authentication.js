import Signup from "../components/authentication/SigninComponent";
import Footer from "../components/FooterComponent";
import { AuthProvider, useAuth } from "../contexts/AuthContext";



function Authentication() {  // TODO needed?
  const { currentUser } = useAuth()


  return (
      <div>
        {currentUser && currentUser.email} Has Signed In
        <Footer/>
      </div>
  );
}

export default Authentication;