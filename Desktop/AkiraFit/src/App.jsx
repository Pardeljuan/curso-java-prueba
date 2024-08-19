import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import './styles/App.scss';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a Akira Fit! Explora nuestra colección de ropa deportiva." />
    </div>
  );
}

export default App;