import './App.css';
import Menu from './componentes/Navbar/Menu';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Contador from './componentes/contador/Contador';


function App() {

  return (  
    <center>
      <Menu />
      <ItemListContainer />
      <Contador min={1} max={22} />
    </center>
  );
}

export default App;
