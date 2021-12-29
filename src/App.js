import './App.css';
import Menu from './componentes/Navbar/Menu';
import ItemListContainer from './componentes/ItemListContainer';


function App() {
  const saludar = 'HOLA'

  return (  
    <center>
      <Menu />
      <ItemListContainer greeting = {saludar} />
    </center>
  );
}

export default App;
