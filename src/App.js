import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner.js'
import Nav from './components/Nav.js'
import Hero from './components/Hero.js'
import ChartsPage from './components/ChartsPage';
function App() {
  return (
    <div className="App">
    <Nav />
    <Hero />
    <ChartsPage />
    </div>
  );
}

export default App;
