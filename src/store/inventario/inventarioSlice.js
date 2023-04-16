

import { createSlice } from '@reduxjs/toolkit';

export const inventarioSlice = createSlice({
    name: 'inventario',
    initialState: {
        isLoadingProducts: true,
        productos: [],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: ( state, { payload } ) => {
                state.activeEvent = payload;
           },

           onAddNewProduct: ( state, { payload } ) => {
            state.productos.push( payload );
           },

           onUpdateProduct: ( state, { payload } ) => {
                state.productos = state.productos.map( event => {

                    if( event._id === payload._id ){
                        return payload;
                    }

                    return event;
                })
           },

           onDeleteProduct: ( state ) =>{
                if( state.activeEvent ){

                    state.productos = state.productos.filter( event => event._id !== state.activeEvent._id );
                    state.activeEvent = null
               

                }
           },

           onLoadProducts: ( state, { payload = [] } ) =>{
                state.isLoadingProducts = false;
                //state.productos = payload;
                payload.forEach( event => {
                    const exists = state.productos.some( dbEvent => dbEvent._id === event._id );
                    if ( !exists ) {
                        state.productos.push( event )
                    }
                })
           },

          
        },
        
    }
);


// Action creators are generated for each case reducer function
export const { 
    
    onSetActiveEvent, 
    onAddNewProduct, 
    onUpdateProduct, 
    onDeleteProduct, 
    onLoadProducts 

} = inventarioSlice.actions;