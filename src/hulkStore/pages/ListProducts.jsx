import React, { useContext } from 'react';
import { ProductItem } from '../../hulkStore/pages/ProductItem';
import {ProviderContext} from '../../context/provider.js';
import './products.css';



export const ListProducts = () => {

    const value = useContext( ProviderContext );
    const [ productos ] = value.productos;
    
    console.log( productos )

  return (
    <>
        <h1 className='title' >Productos</h1>
        <div className='productos'>
            {
                productos.map( producto => (
                    <ProductItem 
                    key={ producto.id }
                    id={ producto.id }
                    title={ producto.title }
                    price={ producto.price }
                    image={ producto.image }
                    category={ producto.category }
                    cantidad={ producto.cantidad }
                    />
                ))
            }
          
        </div>
    </>
   ) 
}
