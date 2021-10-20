import Signup from "../components/authentication/SigninComponent";
import { AuthProvider } from "../contexts/AuthContext";

function Authentication() {
  return (
      <AuthProvider>
        <div>
           <Signup/>
        </div>
      </AuthProvider>
  );
}

export default Authentication;