import './App.css';
import Menu from './componentes/Navbar/Menu';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Contador from './componentes/contador/Contador';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (  
    <center>
      <Menu />
      <ItemListContainer />
      <Contador min={1} max={22} />
      <ItemDetailContainer />
    </center>
  );
}

export default App;
