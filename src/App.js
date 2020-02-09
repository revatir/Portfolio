import React, { Component } from 'react';
import './App.css';

//Custom Components
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Photography from './components/Photography';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <div className="siteContent">
          <About />
          <Projects />
          <Photography />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
