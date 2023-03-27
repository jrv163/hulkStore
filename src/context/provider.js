import { createContext, useEffect, useState } from "react";
import Data from '../helpers/Data';

export const ProviderContext = createContext();

export const DataProvider = (props) => {
    
    const [productos, setProductos] = useState([]);
    const [menu, setMenu] = useState(false);
    const [ cart, setCart ] = useState([]);
    const [ total, setTotal ] = useState(0);


    useEffect(() => {
        const producto = Data.items

        if ( producto ) {
            setProductos(producto)
        } else {
            setProductos([])
        }
    }, [])

    const addCart = (id) => {
        const check = cart.every( item => {
            return item.id !== id;
        })
        if ( check ){
            const data = productos.filter( producto => {
                return producto.id === id
            })
            setCart([...cart, ...data])
        }else {
            alert('El producto ya fue agregado')
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if ( dataCart ) {
            setCart( dataCart );
        }
      
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart)); // con setItem, se guardan los elementos (strings) en el local storage
    }, [cart, setCart])
    
    useEffect(() => {
      const getTotal = () => {
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.cantidad);
        }, 0)
        setTotal(res)
      }
      getTotal()
    }, [cart])
    
    

    const value = {
        productos: [productos],
        menu: [ menu, setMenu],
        addCart: addCart,
        cart: [ cart, setCart ],
        total: [total, setTotal]
    }

    return (
        <ProviderContext.Provider value={ value }>
            { props.children }
        </ProviderContext.Provider>
    )

    
    

}