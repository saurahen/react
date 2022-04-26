import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MyPosts from './components/Profile/Profile';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <MyPosts />
    </div>
  );
};

export default App;
