import './App.css';
import Contacto from './components/Contacto';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Main from './components/Main';
import Questions from './components/Questions';
import AnimacionWsp from './components/AnimacionWsp';
import { useState } from 'react';
import SobreMi from './components/SobreMi';

function App() {
  const [descripcion, setDescripcion] = useState('');

  return (
    <div className="bg-gray-100">
      <Router>
        <Header  setDescripcion={setDescripcion}/>
        <Routes>
          <Route path="/" element={<Main  />} />
          <Route path="/soluciones" element={<Questions setDescripcion={setDescripcion} />} />
          <Route path="/contacto" element={<Contacto descripcionInicial={descripcion} />} />
          <Route path="/acerca-de-mi" element={<SobreMi />} />
        </Routes>
        <AnimacionWsp />
      </Router>
    </div>
  );
}

export default App;
