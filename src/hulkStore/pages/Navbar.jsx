import { useContext } from 'react';
import { ProviderContext } from '../../context/provider.js';

export const Navbar = () => {


  const value = useContext(ProviderContext);
  const [ cart ] = value.cart;

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 navbar__container" >
      <span className="navbar-brand">
      <i className="fa-regular fa-file-excel"></i>
          &nbsp;
          Hulk Store
      </span>
      <span className="navbar-brand  navbar__shopping">
      <i className="fa-solid fa-cart-shopping "></i>
      &nbsp;
         { cart.length }
      </span>
     
      <button className="btn btn-outline-primary">
      <i className="fa-solid fa-right-from-bracket"></i>
      &nbsp;
        Salir
      </button>

    </div>
  )
}
