import './App.css';
import React, {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Home from './Componentes/Home';
import Navbar from './Componentes/Navbar';
import Cabecera from './Componentes/Cabecera';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <h1>MENU</h1>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Cabecera />} />
      </Routes>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
