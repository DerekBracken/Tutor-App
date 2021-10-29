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
import CalendarContainer from "./containers/CalendarContainer";
import LearningResourcesContainer from "./containers/LearningResourcesContainer";
import Signup from "./components/authentication/SigninComponent";
import Login from "./components/authentication/LoginComponent";
import ForgotPassword from "./components/authentication/ForgotPassword";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute"
import HowItWorksContainer from "./containers/HowItWorksContainer";
import SessionsList from "./components/SessionsList";


function MainContainer() {
    const { currentUser } = useAuth()
    const [user, setUser] = useState(null);
    const [allMentors, setAllMentors] = useState(null);
    const [allMentees, setAllMentees] = useState(null);



    useEffect(() => {
        getUser();
        getAllMentors();
        getAllMentees();
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

    const getAllMentees = function() {
        fetch("http://localhost:8080/mentees")
        .then(res => res.json())
        .then(allMentees => setAllMentees(allMentees))
    }

    return (
        <Router>
            <Switch>
              
              {/* <PrivateRoute path="/update-profile" component={updateProfile} /> */}

              <Route exact path="/users/update/:id" component={() => <UpdateProfile user={user}/>}/>
    
              <Route path="/" exact component={() => <HomeContainer user={user}/>}/>
              
              <Route path="/signup" component={Signup} exact />
    
              <Route path="/login" component={Login} exact />
    
              <PrivateRoute exact path="/profile" component={() => <Profile user={user} />}/>
    
              <Route path="/forgot-password" component={ForgotPassword} exact/>
    
              <PrivateRoute path="/mentor-form" component={MentorSignupFormComponent} exact/>
    
              <PrivateRoute path="/mentee-form" component={MenteeSignupFormComponent} exact/>

              {/* displays all a mentors view of their mentees */}
              <PrivateRoute exact path="/sessions" component={() => <SessionsList user={user} />}/>
              
              {/* displays all a mentors view of their mentees */}
              <PrivateRoute exact path="/my-mentees" component={() => <MenteeContainer user={user} />}/>
 
              {/* mentor displays all sessions NEEDED? */}
              <PrivateRoute exact path="/my-mentor" component={() => <MentorContainer user={user} allMentees={allMentees}/>}/>

              {/* mentor and mentee routes need to be locked behind private - accessible only with signin */}

              {/* public route */}
              <Route exact path="/view-mentors" component={() => <AllMentorsContainer user={user} allMentors={allMentors}/>}/>
               
              {/* needs content */}
              <Route exact path="/how-it-works" component={() => <HowItWorksContainer user={user}/>}/>

              <Route exact path="/learning-resources" component={() => <LearningResourcesContainer user={user}/>}/>
              
              {/* calendar just for access, not the final route */}
              <Route path="/calendar" exact>
                <CalendarContainer/>
              </Route>
    
              <Route> 
                <PageNotFound/>
              </Route>
            </Switch>
        </Router>
    )
}

export default MainContainer;


