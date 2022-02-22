import React from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skills from './components/pages/Skills';
import ThankYou from './components/pages/ThankYou';
import About from './components/pages/About';
import Contact from "./components/pages/Contact"




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/skills' component={Skills} />
          <Route path='/thank-you' component={ThankYou} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;