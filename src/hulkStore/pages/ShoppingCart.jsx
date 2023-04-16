import { useContext } from 'react';

import { ProviderContext } from '../../context/provider.js';


export const ShoppingCart = () => {

const value = useContext(ProviderContext);
const [ menu, setMenu ] = value.menu;
const [cart, setCart] = value.cart;
const [ total ] = value.total;

console.log(menu);

const toogleFalse = () => {
    setMenu( false )
}

const show1 = menu ? "shopping__carts show" : "shopping__carts";
const show2 = menu ? "shopping__cart show" : "shopping__cart";


const removeProducto = (_id) => {
    if( window.confirm( "¿Quieres eliminar el producto" ) ){
        cart.forEach((item, index) => {
            if( item._id === _id ){
                
                item.cantidad.preventExtensions = 1;
                cart.splice(index, 1)
            }
        })
      setCart([...cart])  
    }
}


  return (
    <div className={show1}>
        <div className={show2}>
            <div className='shoppingcart__close' onClick={toogleFalse}>
            <i className="fa-solid fa-xmark" ></i>
            </div>
            <h2>Su Carrito</h2>
            <div className='shoppingcart__center'>

            { 
            cart.length === 0 
                    ? <h2 style={{ textAlign: "center", fontSize:"3rem"}}>Carrito Vacío</h2>
                    : <>
                    {
                cart.map( (producto) => (
                    
                      <div className='shoppingcart__item' key={producto.id}>
                            <img src={ producto.image } alt=""  />
                            <div>
                                <h3>{producto.title}</h3>
                                <p className='price'>${producto.price}</p>
                            </div>
                            <div>
                            
                            <p className='cantidad'>{producto.cantidad}</p>
                          
                            </div>
                            <div className='remove__item' onClick={() => removeProducto(producto._id)}>
                            <i className="fa-solid fa-trash"></i>
                            </div>
                     </div>
                ))     
            }
            </>
            }
            </div>
            <div className="shoppingcart__footer">
                <h3>Total: ${total}</h3>
                <button className='btn'>Payment</button>
            </div>
        </div>
        
    </div>
  )
}
