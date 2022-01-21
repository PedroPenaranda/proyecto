import React, { useState } from 'react'
import './Contador.css'

function Contador({min, max, añadir}) {

    const [contador, setContador] = useState(min, {pre: 100})

    const sumarU = () => { 
        contador < max ? setContador (contador + 1) : alert('Ha alcanzado el limite de productos')
    }

    const restarU = () => {
        contador > min ? setContador (contador - 1) : alert('Este es le minimo de productos')
    }

    return (
        <div>
            <div className='contenedorContador'>
                <button className='btnSumar' onClick={sumarU}>+</button>
                <div className='contenedorPreCant'>
                    <h2 className='contadorCantidad'>{contador}</h2>
                </div>
                <button className='btnRestar' onClick={restarU}>-</button>
            </div>
            <div>
                <button onClick={() => añadir (contador)}>Añadir carritototot</button>
            </div>
        </div>
    )
}

export default Contador
