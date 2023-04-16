import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProviderContext } from '../../context/provider.js';
import { useAuthStore } from '../../hooks/useAuthStore.js';

export const Navbar = () => {

  const { startLogout } = useAuthStore();

  const value = useContext(ProviderContext);
  const [ cart ] = value.cart;

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 navbar__container" >
      <span className="navbar-brand">
      <i className="fa-regular fa-file-excel"></i>
          &nbsp;
          Hulk Store
      </span>

      <Link to='/forms'>
        <button className="btn btn-outline-light"  >
        <i className="fa-solid fa-right-from-bracket"></i>
        &nbsp;
          Agregar Producto
        </button>
      </Link>

      <span className="navbar-brand  navbar__shopping">
      <i className="fa-solid fa-cart-shopping "></i>
      &nbsp;
         { cart.length }
      </span>
     
      <button className="btn btn-outline-primary" onClick={ startLogout } >
      <i className="fa-solid fa-right-from-bracket"></i>
      &nbsp;
        Salir
      </button>

    </div>
  )
}
