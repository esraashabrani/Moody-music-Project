import React, { Component } from "react";
import "./style.css";
import Nav from "./nav";
import login from "./login";
import Signup from "./signup";
import Body from "./home";
import About from "./aboutus";
import Profile from "./profile";
import form from "./form";
// import Contact from "./contactus";
import MediaControlCard from "./happy";
import Sad from "./sad";
import Calm from "./calm";
//import Jazz from "./jazz";
import FriendsDrive from "./friendsDrive";
import Tarab from "./tarab";
import Sarcastic from "./sarcastic";
import Romantic from "./romantic";
import Pop from "./pop";
import SimpleBottomNavigation from "./footer";
import ButtonAppBar from "./nav";
import ProductCategories from "./home";
import Footer from "./footer";
import Commuinty from "./commuinty";
// import { Mood, Happy, Romantic, Tarab, Sarcastic, Workout } from "./mood";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ButtonAppBar/>
          <Route path="/" exact component={ProductCategories} />
          <Route path="/login" component={login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/form" component={form} />

          
          {/* <Route path="/contactus" component={Contact} /> */}
          <Route path="/aboutus" component={About} />
          <Route path="/commuinty" component={Commuinty} />
          <Route path="/sad" component={Sad} />
          <Route path="/happy" component={MediaControlCard} />
          <Route path="/romantic" component={Romantic} />
          <Route path="/tarab" component={Tarab} />
          <Route path="/sarcastic" component={Sarcastic} />
          <Route path="/calm" component={Calm} />
          
          <Route path="/workout" component={FriendsDrive} />
          <Route path="/pop" component={Pop} />
          <Footer />
          {/* <Route path="/" exact component={Body} />
          <Route path="/" exact component={Body} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
