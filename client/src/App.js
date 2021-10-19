import Signup from "./components/authentication/SigninComponent";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
      <AuthProvider>
        <div>
           <Signup/>
        </div>
      </AuthProvider>
  );
}

export default App;
