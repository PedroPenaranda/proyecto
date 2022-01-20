import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Navbar/Menu';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Navbar/Carrito';


function App() {

  return (  
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path = '/' element = { <ItemListContainer />} />
        <Route exact path = '/Categoria/:CategoriaId' element = { <ItemListContainer />} />
        <Route exact path = '/Descripcion/:DescripcionId' element = { <ItemDetailContainer />} />
        <Route exact path = '/Cart' element = { <Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
