// App.jsx
import React from 'react';
import Welcome from './layouts/Welcome';
import Collaboration from './layouts/Collaboration';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Welcome />
      <Collaboration />
      <Footer/>
    </div>
  );
}

export default App;
