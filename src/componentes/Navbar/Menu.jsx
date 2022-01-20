import React from 'react'
import './Menu.css'
import Carrito from './Carrito'
import { Link } from 'react-router-dom'



const Menu = () => {
    return (
        <nav className='navBar'>
            <Link to= '/'><h3>LOGO</h3></Link>
            <ul className='listaPrincipal'>
                <li className='itemLista'><a href="#">Ingresar</a></li>
                <li className='itemLista'><a href="#">Lista de articulos</a></li>
                <Link to='/Categoria/PS'> <li className='itemLista'><a href="#">Ps4</a></li> </Link> 
                <Link to='/Categoria/XX'> <li className='itemLista'><a href="#">Xbox</a></li> </Link>
                <Link to='/Cart'> <Carrito /> </Link>
            </ul>
        </nav>
    )
}

export default Menu
