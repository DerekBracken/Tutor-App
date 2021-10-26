import MentorSignupFormComponent from "./components/MentorSignupFormComponent";
import MenteeSignupFormComponent from "./components/MenteeSignupFormComponent";
import HomeContainer from "./containers/HomeContainer";
import MenteeContainer from "./containers/MenteeContainer";
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
import HowItWorksContainer from "./containers/HowItWorksContainer";


function MainContainer() {
    const { currentUser } = useAuth()
    const [user, setUser] = useState(null);
    const [allMentors, setAllMentors] = useState(null);


    useEffect(() => {
        getUser();
        getAllMentors();
    },[])
  
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

    const getAllMentors = function() {
        fetch("http://localhost:8080/mentors")
        .then(res => res.json())
        .then(allMentors => setAllMentors(allMentors))
    }

    return (
        <Router>
            <Switch>
              
              {/* <PrivateRoute path="/update-profile" component={updateProfile} /> */}
    
              <Route path="/" exact component={() => <HomeContainer user={user}/>}/>
              
              <Route path="/signup" component={Signup} exact />
    
              <Route path="/login" component={Login} exact />
    
              <PrivateRoute exact path="/profile" component={() => <Profile user={user} />}/>
    
              <Route path="/forgot-password" component={ForgotPassword} exact/>
    
              <PrivateRoute path="/mentor-form" component={MentorSignupFormComponent} exact/>
    
              <PrivateRoute path="/mentee-form" component={MenteeSignupFormComponent} exact/>
  
    
              {/* mentor and mentee routes need to be locked behind private - accessible only with signin */}

              {/* mentee displays all sessions and meeting form */}

              <Route exact path="/view-mentors" component={() => <AllMentorsContainer user={user} allMentors={allMentors}/>}/>
               

              <Route path="/my-mentees" exact>
                <MenteeContainer />
              </Route>
              {/* Needed? */}
              {/* <Route path="/meetingform" exact>
                <MenteeContainer/>
              </Route> */}

              {/* needs a container and content */}
              <Route path="/how-it-works" exact>
                <HowItWorksContainer/>
              </Route>


              {/* mentor displays all sessions */}
              <Route path="/my-mentor" exact>
                <MentorContainer />
              </Route>

              <Route path="/view-mentors" exact>
                <AllMentorsContainer/>
              </Route>
              

    
              {/* Not private */}
    
    
    
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


