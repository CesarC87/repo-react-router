import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Componentes/Home';
import About from './Componentes/About';

function App() {
  return (
    <div className="App">
    
      <h1>MENU</h1>
      <Navbar /> 
      <Cabecera />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
