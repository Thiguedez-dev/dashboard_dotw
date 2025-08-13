import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import SalaEstar from './SalaEstar';
import Cozinha from './Cozinha';
import Quarto from './Quarto';
import Banheiro from './Banheiro';
import Garagem from './Garagem';
import DadosAgregados from './DadosAgregados';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Dashboard' element={< Dashboard />} />
        <Route path='/SalaEstar' element={< SalaEstar />} />
        <Route path='/Cozinha' element={< Cozinha />} />
        <Route path='/Quarto' element={< Quarto />} />
        <Route path='/Banheiro' element={< Banheiro />} />
        <Route path='/Garagem' element={< Garagem />} />
        <Route path='/DadosAgregados' element={< DadosAgregados />} />
      </Routes>
    </Router>
  );
}

export default App;
