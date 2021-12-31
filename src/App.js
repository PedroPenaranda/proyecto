import './App.css';
import Menu from './componentes/Navbar/Menu';
import ItemListContainer from './componentes/ItemListContainer';
import Contador from './componentes/contador/Contador';


function App() {
  const saludar = 'HOLA'

  return (  
    <center>
      <Menu />
      <ItemListContainer greeting = {saludar} />
      <Contador min={1} max={22} />
    </center>
  );
}

export default App;
