import './App.css';
import Principal from "./components/Principal"
import Contacto from './components/Contacto';
import { BrowserRouter as Router,Routes,Route } from 'react-router';

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
