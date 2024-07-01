import { BrowserRouter, Router } from 'react-router-dom';
import MainRouter from './components/routes/mainRouter';

import './App.css';
import NavBar from './components/navbar/navBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar />

        <MainRouter />

      </BrowserRouter>
    </div>
  );
}

export default App;
