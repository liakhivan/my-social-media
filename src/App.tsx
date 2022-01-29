import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './App.scss';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
