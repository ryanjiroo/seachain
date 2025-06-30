// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Welcome from './layouts/Welcome';
import About from './layouts/About'; 
import Solution from './layouts/Solution';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Impact from './layouts/Impact';

function App() {
  return (
    <Router> {/* Wrap with Router */}
      <div className="App">
        <Navbar />
        <Welcome />
        <About /> {/* Use the renamed component */}
        <Solution/>
        <Impact />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
