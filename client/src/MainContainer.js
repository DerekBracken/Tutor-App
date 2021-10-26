import MentorSignupFormComponent from "./components/MentorSignupFormComponent";
import MenteeSignupFormComponent from "./components/MenteeSignupFormComponent";
import HomeContainer from "./containers/HomeContainer";
import MenteeContainer from "./containers/MenteeContainer";
import UpdateProfile from "./components/UpdateProfile";
import MentorContainer from "./containers/MentorContainer";
import Profile from "./containers/Profile";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageNotFound from "./components/404";
import React, {useState, useEffect} from 'react';
import AllMentorsContainer from "./containers/AllMentorsContainer";
import SignupContainer from "./containers/SignupContainer";
import CalendarContainer from "./containers/CalendarContainer";
import LearningResourcesContainer from "./containers/LearningResourcesContainer";
import Signup from "./components/authentication/SigninComponent";
import Login from "./components/authentication/LoginComponent";
import ForgotPassword from "./components/authentication/ForgotPassword";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute"


function MainContainer() {
    const { currentUser } = useAuth()
    const [user, setUser] = useState(null);
    console.log("app.js",currentUser);
    useEffect(() => {
        getUser();
    },[currentUser])
  
    // Add error for catch
    const getUser = function() {
      try {
        fetch(`http://localhost:8080/mentees?email=${currentUser.email}`)
        .then(res => res.json())
        .then(user => setUser(user))
      } catch {}
      try {
        fetch(`http://localhost:8080/mentors?email=${currentUser.email}`)
        .then(res => res.json())
        .then(user => setUser(user))
      } catch {}
    } 

    return (
        <Router>
            <Switch>
              
              {/* <PrivateRoute path="/update-profile" component={updateProfile} /> */}

              <Route exact path="/users/update/:id" component={() => <UpdateProfile user={user}/>}/>
    
              <Route path="/signup" component={Signup} exact />
    
              <Route path="/login" component={Login} exact />
    
              <PrivateRoute exact path="/profile" component={() => <Profile user={user} />}/>
    
              <Route path="/forgot-password" component={ForgotPassword} exact/>
    
              <PrivateRoute path="/mentor-form" component={MentorSignupFormComponent} exact/>
    
              <PrivateRoute path="/mentee-form" component={MenteeSignupFormComponent} exact/>
    
              <Route path="/" exact><HomeContainer/></Route>
    
              {/* mentor and mentee routes need to be locked behind private - accessible only with signin */}

              {/* mentee displays all sessions and meeting form */}
              <Route path="/mentee" exact>
                <MenteeContainer />
              </Route>
              {/* Needed? */}
              <Route path="/meetingform" exact>
                <MenteeContainer/>
              </Route>

              {/* mentor displays all sessions */}
              <Route path="/mentor" exact>
                <MentorContainer />
              </Route>

              <Route path="/view-mentors" exact>
                <AllMentorsContainer/>
              </Route>
              

    
              {/* Not private */}
    
              <Route path="/view-mentors" exact>
                <AllMentorsContainer />
              </Route>
    
              {/* <Route path="/signupform" exact>
                <SignupContainer/>
              </Route> */}
    
              {/* calendar just for access, not the final route */}
              <Route path="/calendar" exact>
                <CalendarContainer/>
              </Route>
    
              <Route path="/learning-resources" exact>
                <LearningResourcesContainer/>
              </Route>
    
              <Route> 
                <PageNotFound/>
              </Route>
    
            </Switch>
        </Router>
    )
}

export default MainContainer;


