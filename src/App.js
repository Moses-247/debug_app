import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('Welcome to Debugging!');

  return (
    <div className="App">
      <Header title="Debug Sample App" />
      <Content message={message} />
      <Footer year={2025} />
    </div>
  );
}

export default App;
