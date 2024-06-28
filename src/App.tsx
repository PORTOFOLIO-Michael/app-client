import HomePage from './components/home/homePage';
import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <HomePage />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
