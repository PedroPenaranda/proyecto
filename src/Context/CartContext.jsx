import React, { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const añadirCarrito = (item, cantidad) => {
        if (enCarrito(item.id)) {
            sumarCantidad(item, cantidad);
        } else {
            setCarrito([...carrito, { ...item, cantidad }]);
        }
    };

    const enCarrito = (id) => {
        const carritou = carrito.some((prod) => prod.id === id);
        return carritou;
    };

    const sumarCantidad = (item, cantidad) => {
        const cop = [...carrito];
        cop.forEach((product) => {
            product.id === item.id && (product.cantidad += cantidad);
        });
    };

    const borrarProducto = (id) => {
        const filtrarI = carrito.filter((product) => product.id !== id);
        setCarrito(filtrarI);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const cantidadTotal = () => {
        let count = 0;
        carrito.forEach((product) => {
            count += product.precio * product.cantidad;
        });
        return count;
    };

    return (
        <CartContext.Provider
            value = {{ añadirCarrito, borrarProducto, vaciarCarrito, cantidadTotal }}
        >
            {children}
        </CartContext.Provider>
    );
};