import profile from './resources/Profile.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
            Welcom to Michael's Portofolio
        </h1>
        
        <img src={profile} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
