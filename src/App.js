import { useEffect, useState } from 'react';
import { getUserApi } from './apis';
import './App.css';
import MainRouter from './MainRouter/MainRouter';
import { AppContext } from './appContext';
import { useNavigate } from 'react-router-dom';

function App() {
  
  return (
    // <BrowserRouter>
    <AppContext.Provider>
      <MainRouter />
    </AppContext.Provider>
    // </BrowserRouter>
  );
}

export default App;
