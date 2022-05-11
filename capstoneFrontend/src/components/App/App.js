import React, {useEffect, useState}from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "../NavBar";
import Horses from "../Horses";
import Home from "../Home";
import About from "../About";
import Login from "../login";
import SignUp from "../SignUp";
import MapContainer from "../MapContainer";
import HorseCard from "../HorseCard";
import EmailSignup from "../EmailSignup";
import MessageSeller from "../MessageSeller"
function App() {

  
  //contact form styling

  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  // //if (user) {
  //   //return <h2>Welcome, {user.username}!</h2>;
  // //} else {
  //   return <Login onLogin={setUser} />;
  // }
function handleLogin(user){
  setUser(user)
}

function handlelogout(){
setUser(null)
}
  return (
    <BrowserRouter >
        <NavBar user={user} onlogout={handlelogout}/>
            <Switch>
              <Route path= "/home" >
                <Home />
              </Route>
              <Route path= "/horses" >
                <Horses />
              </Route>
              <Route path= "/about" >
                <About />
              </Route>
              <Route path= "/login">
                <Login onLogin = {handleLogin}/>
              </Route>
              <Route path= "/SignUp">
                <SignUp />
              </Route>
              <Route path= "/MapContainer">
                <MapContainer />
              </Route>
              <Route path="/HorseCard">
                <HorseCard />
              </Route>
              <Route path="/EmailSignup">
                <EmailSignup />
              </Route>
              <Route path="/message_seller">
                <MessageSeller />
              </Route>
            </Switch>
      </BrowserRouter>
  );
}
export default App;
