import React, { useState } from 'react'
import Sidebar from "./Sidebar";
import './App.css';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Chat from './Chat';
import Login from './Login';
import {useStateValue} from "./StateProvider";

function App() {
  const[{user} , dispatch] = useStateValue();
  // const[user , setUser] = useState(null);


  return (
    <div className="app">
      {!user ? (
        <Login/>
      ): (
        <div className=" app_body">
        <Router>
          <Sidebar/>
          <Switch>
          <Route path = "/rooms/:roomId">
            <Chat/>
          </Route>
          <Route path = "/">
            <Chat/>
          </Route>
          </Switch>
        </Router>  
        {/* <Sidebar/>
        <Chat/> */}
      </div>    
      )}
    </div>
  );
}

export default App;
