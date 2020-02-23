import React from 'react';
import './App.css';
import Homepage from './components/homepage';
import BloodDonorsList from './components/donors-list';

function App() {
  return (
    <div className="App">
      <BloodDonorsList />
    </div>
  );
}

export default App;
