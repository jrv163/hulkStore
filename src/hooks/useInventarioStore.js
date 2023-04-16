import { useDispatch, useSelector,  } from "react-redux";
import { onAddNewProduct, onDeleteProduct, onLoadProducts, onSetActiveEvent, onUpdateProduct } from "../store";
import hulkApi from "../api/hulkApi";


export const useInventarioStore = (  ) => {

    const dispatch = useDispatch();

    const { productos, activeEvent } =  useSelector( state => state.inventario);

    const setActiveEvent = ( inventarioEvent ) => {
        dispatch( onSetActiveEvent( inventarioEvent ) )
    }

    const startSavingProduct = async( inventarioEvent ) => {
        // TODO LLEGAR AL BACKEND

        if( inventarioEvent._id ){
            // actualizando
            dispatch( onUpdateProduct( ...inventarioEvent ) );
        } else{
            // creando
            const { data } = await hulkApi.post( '/productos', inventarioEvent );
            console.log( { data } )
            dispatch( onAddNewProduct({ ...inventarioEvent, _id: data.productoGuardado._id }) )
        }

    }


    const deleteProduct = (  )  =>{
        dispatch( onDeleteProduct() )
    }

    const DeletingProducts = async( inventarioEvent ) => {
        try {

            await hulkApi.delete(`/productos/${ inventarioEvent }`)
            console.log( activeEvent._id )
            dispatch( onDeleteProduct() )
        } catch (error) {
            console.log( error )
        }
    }


    const startLoadingProducts = async() => {

        try {
            const { data } = await hulkApi.get('/productos');
            console.log( { data } );
            dispatch( onLoadProducts( data.productos ) )
            
        } catch (error) {
            console.log('Error cargando productos');
            console.log( error )
        }
    }


    return {

        productos,
        activeEvent,
        

        setActiveEvent,
        startSavingProduct,
        deleteProduct,
        startLoadingProducts,
        DeletingProducts,

    }
}