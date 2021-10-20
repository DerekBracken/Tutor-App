import Authentication from "./containers/Authentication";
import { AuthProvider } from "./contexts/AuthContext";
import MentorSignupFormComponent from "./components/MentorSignupFormComponent";
import MenteeSignupFormComponent from "./components/MenteeSignupFormComponent";
import HomeContainer from "./containers/HomeContainer";
import MenteeContainer from "./containers/MenteeContainer";
import MentorContainer from "./containers/MentorContainer";
import Profile from "./containers/Profile";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageNotFound from "./components/404";
import React, {useState} from 'react';
import AllMentorsContainer from "./containers/AllMentorsContainer";
import SignupContainer from "./containers/SignupContainer";

function App() {

  const [username, setUserName] = useState("")
  return (
      
        <Router>

        {/* <Layout userName={userName} setUserName={setUserName}> */}

        <Switch>

        {/* Derek's authentication */}
        {/* <AuthProvider>
           
              <PrivateRoute exact path="/" component={Dashboard} />

              <PrivateRoute path="/update-profile" component={updateProfile} />

              <Route path="/signup" component={Signup} />

              <Route path="/login" component={Login} />

              <Route path="/forgot-password" component={ForgotPassword} />
      
          </AuthProvider> */}

          {/* mentor and mentee routes need to be locked behind private - accessible only with signin */}
          <Route path="/mentee" exact>
            <MenteeContainer />
          </Route>

          <Route path="/mentor" exact>
            <MentorContainer />
          </Route>

          <Route path="/mentee/mentors" exact>
            <AllMentorsContainer/>
          </Route>

          <Route path="/profile" exact>
            <Profile/>
          </Route>


          {/* Not private */}
    
          <Route path="/" exact>
            <HomeContainer />
          </Route>

          <Route path="/viewmentors" exact>
            <AllMentorsContainer />
          </Route>

          <Route path="/signupform" exact>
            <SignupContainer/>
          </Route>

          <Route component={PageNotFound}>
          </Route>

          

          </Switch>
          {/* </Layout> */}
        

        </Router>
  
  );
}

export default App;
