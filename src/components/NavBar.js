import React, { useState } from 'react';
import NavBar from './NavBar';
import About from '../pages/About';
import Home from '../pages/Home';
import Plan from '../pages/Plan';
import Show from '../pages/Show';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'login':
        return <Plan />;
      case 'about':
        return <About />;
      case 'show':
        return <Show />;
      default:
        return null;
    }
  };

  return (
    <div>
      <NavBar navigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
