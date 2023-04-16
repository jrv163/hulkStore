import { useInventarioStore } from "../../hooks/useInventarioStore";
import './products.css'

export const DeleteProducts = () => {

    const { deleteProduct, DeletingProducts }  = useInventarioStore();

    const handleDeleteProducts = () => {
        DeletingProducts();
    } 

  return (
    <button 
    className="btn btn-primary fab-danger"
    onClick={ handleDeleteProducts }
    >
        <i className="fas fa-trash-alt"></i>

    </button>
  )
}
