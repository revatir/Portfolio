import React, { Component } from 'react';
import './App.css';

//React Router
import { Route } from 'react-router-dom';

//Custom Components
import Header from './components/Header';
import Footer from './reactImages/Footer';
import About from './components/About';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Photography from './components/Photography';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="siteContent">
          <Route path="/About" render={(props) =>
            <About />} />
          <Route path="/Projects" render={(props) =>
            <Projects />} />
          <Route path="/Photography" render={(props) =>
            <Photography />} />
          <Route path="/Contacts" render={(props) =>
            <Contacts />} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
