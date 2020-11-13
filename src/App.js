import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideo from './RecommendedVideo';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="app__page">
        {/* Sidebar */}
        <Sidebar />
        {/* Recommended */}
        <RecommendedVideo />
      </div>
    </div>
  );
}

export default App;
