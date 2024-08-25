import { BrowserRouter } from 'react-router-dom';
import MainRouter from './components/routes/mainRouter';
import NavBar from './components/navbar/navBar';

import './App.css';

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
