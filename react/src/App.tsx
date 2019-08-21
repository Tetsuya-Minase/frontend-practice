import React from 'react';
import './App.css';
import FetchRssList from './containers/FetchRssList';
import FetchButton from './containers/FetchButton';

const App: React.FC = () => {
  return (
      <div>
        <FetchButton />
        <FetchRssList />
      </div>
  );
};

export default App;
