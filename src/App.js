import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import Pricing from './Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Pricing></Pricing>
    </div>
  
  );
}

export default App;
