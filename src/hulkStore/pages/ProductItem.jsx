import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProviderContext } from '../../context/provider.js';


export const ProductItem = (
    { 
    id,
    title,
    price,
    image,
    category,
    cantidad
 }) => {


    const value = useContext(ProviderContext);
    const [menu, setMenu] = value.menu;
    const addCart = value.addCart;
  
    
    const toogleMenu = () => {
        setMenu(!menu);
    }

    console.log(menu)

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
                    <button className="btn" onClick={() => addCart(id)} >
                        Añadir al carrito</button>
                    <div>
                    <button className="btn" onClick={toogleMenu} >Info</button>
                    </div>
                 </div>
            </div>
  )
}
