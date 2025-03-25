import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaInicio from './paginas/PaginaInicio'; 
import PerfilPokemon from './paginas/PerfilPokemon'; 
import ListaPokemones from './paginas/ListaPokemones'; 
import Busqueda from './paginas/Busqueda'; 
import Navbar from './components/Navbar'; 
import AudioPlayer from './components/AudioPlayer';

const App = () => {
  return (
    <>

      <Router>
        <Navbar />
        <AudioPlayer />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/busqueda" element={<Busqueda />} />
          <Route path="/lista" element={<ListaPokemones />} />
          <Route path="/perfil/:id" element={<PerfilPokemon />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
