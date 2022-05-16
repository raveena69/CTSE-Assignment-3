import React from 'react';
import AppBar from './Components/AppBar';
import Footer from "./Components/Footer"
import BasicRouter from './Router/Router'
function App() {
  return (
    <div >
      <AppBar />
      <BasicRouter/>
      <Footer />
    </div>
  );
}

export default App;
