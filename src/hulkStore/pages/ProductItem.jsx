import { useContext } from 'react';
import { ProviderContext } from '../../context/provider.js';
import { useInventarioStore } from '../../hooks/useInventarioStore.js';


export const ProductItem = (
    { 
    id,
    title,
    price,
    image,
    category,
    cantidad
 }) => {

   const { setActiveEvent } = useInventarioStore();
    const value = useContext(ProviderContext);
    const [menu, setMenu] = value.menu;
    const addCart = value.addCart;
    
    const toogleMenu = () => {
        setMenu(!menu);
    }

    //console.log(menu)

    const onSelect = ( event ) => {
        setActiveEvent(event);
    }

  return (
    <div className="producto" >
                <a href="www.espn.com">
                    <div className='producto__img'>
                        <img src={image} alt={ title } style={{width: 200, height:300}}  />
                    </div> 
                </a>

                <div className='producto__footer'>
                    <h1>{ title }</h1>
                    <p>{ category }</p>
                    <p className="price">${ price }</p>
                </div>

                <div className="buttom">
                    <button className="btn" onClick={ (event ) => onSelect(event) } onDoubleClick={  () => addCart(id) } >
                        Añadir al carrito</button>
                    <div>
                    <button className="btn" onClick={toogleMenu} >Ver</button>
                    </div>
                 </div>
            </div>
  )
}
