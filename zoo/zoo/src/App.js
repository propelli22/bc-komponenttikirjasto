import './App.css';
import Nav from './nav.js'
import Home from './home.js'
import Animals from './animals.js'
import Birds from './birds.js'
import About from './about.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Animals />
      <Birds />
      <About />
    </div>
  );
}

export default App;
