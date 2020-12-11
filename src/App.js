import React from 'react'
import './App.css';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact name="Nellie Newman" 
               avatar={'https://randomuser.me/api/portraits/women/45.jpg'}
               online
      />
      <Contact name="Dennis Morales" 
               avatar={'https://randomuser.me/api/portraits/men/95.jpg'}
               offline
      />
      <Contact name="Gladys Rhodes" 
               avatar={'https://randomuser.me/api/portraits/women/57.jpg'}
               online
      />
    </div>
  );
}

export default App;