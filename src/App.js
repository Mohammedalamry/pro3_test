import React from 'react';
import './App.css';
import HeaderApp from './components/HeaderApp.js';
import Home from './container/Home';
import Country from './container/Country.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import City from './container/City';
import AboutUs from './container/AboutUs.js';



function App() {
  return (
    <div className="super_container">
       
       <HeaderApp />
       <main>  
       <Router>

       <div>
        <Route exact path="/" component={Home} />
        <Route path="/Country" component={Country} />
        <Route path="/City" component={City} />
        <Route path="/AboutUs.js"  component={AboutUs} />
      </div>
      
  
  </Router >
  </main>
       </div>

        
    );
  }


export default App;
