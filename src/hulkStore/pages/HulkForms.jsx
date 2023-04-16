
import './products.css';
import { useForm } from '../../hooks/useForm';
import { ProviderContext } from '../../context/provider';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInventarioStore } from '../../hooks/useInventarioStore';

const formsField = {
  title: '',
  cantidad: '',
  id:'',
  price:'',
  category: '',
  image: '' 
}

export const HulkForms = () => {

  const { title, cantidad, id, price, category ,image, formState, onInputChange,  } = useForm(formsField);

  const { productos, startSavingProduct, setActiveEvent, deleteProduct, startLoadingProducts  } =  useInventarioStore();


  //const value = useContext( ProviderContext );
  //const productos = value.productos;

  const handleSubmit = async (event) =>{
    event.preventDefault();
    // console.log( title, cantidad, id, price );
    // console.log( productos )
    await startSavingProduct( formState);
    setActiveEvent( formState )
  }

  const handleDelete = () => {
    deleteProduct();
  };


  useEffect(() => {
    startLoadingProducts();
  }, [])
  



  
  return (
    <>
    

    <div className="container-forms">
        <div className="col-md-6 login-form-2">
                        <h3>Inventario Prodctos</h3>
                        <form onSubmit={ handleSubmit } >
                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre prodcuto"
                                    name='title'
                                    onChange={ onInputChange }
                                    value={ title }
                                
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cantidad( debe ser un número) "
                                    name='cantidad'
                                    onChange={ onInputChange }
                                    value={ cantidad }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="digite la categoria"
                                    name='category'
                                    onChange={ onInputChange }
                                    value={ category }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite la URL de la Image"
                                    name='image'
                                    onChange={ onInputChange }
                                    value={ image }
                                    
                                />
                            </div>


                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite el ID" 
                                    name='id'
                                    onChange={ onInputChange }
                                    value={ id }
                            
                                />
                            </div>

                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="digite el precio (solo números)" 
                                    name='price'
                                    onChange={ onInputChange }
                                    value={ price }
                                    
                                />
                            </div>

                            <div className="form-group mb-2">
                                <input 
                                    type="submit" 
                                    className="btnSubmit" 
                                    value="Crear Producto" />
                            </div>

                            <div className="form-group mb-2">
                                <input 
                                    type="button" 
                                    className="btnDelete" 
                                    value="Eliminar" 
                                    onClick={ handleDelete }
                                    />
                            </div>
                        </form>
                            <Link to='/*'>
                                <button className="button btn btn-outline-light" >
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    &nbsp;
                                        Regresar
                                </button>
                            </Link>
                            
                </div>

        </div>
            
    
    </>
    
  )
}
