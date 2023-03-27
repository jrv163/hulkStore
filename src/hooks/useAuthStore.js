import { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux"
import { hulkApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";


export const useAuthStore = () => {


    const { status, user,  errorMessage } = useSelector( state => state.auth )
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) =>{
        dispatch( onChecking() )
        console.log( email, password )

        try {
            
            const { data } = await hulkApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime()); // desde el frontend podemos ver que el token es permitido
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            dispatch( onLogout('Creedenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10)
        }
    }




    const startRegister = async({ email, password, name }) =>{
        dispatch( onChecking() )
       

        try {
            
            const { data } = await hulkApi.post('/auth/new', { email, password, name });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime()); // desde el frontend podemos ver que el token es permitido
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            console.log( error )
            // dispatch( onLogout('verificar') );
            dispatch( onLogout( error.response.data?.msg || '------') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10)
        }
    }


    const checkAuthToken = async() => {
            const token = localStorage.getItem('token');
            if ( !token ) return dispatch( onLogout() );

            try {
                const { data } = await hulkApi.get( '/auth/renew' );
                localStorage.setItem('token', data.token);
                localStorage.setItem('token-init-date', new Date().getTime());
                dispatch( onLogin({ name: data.name, uid: data.uid }) );
            } catch (error) {
                localStorage.clear();
                dispatch( onLogout() );
            }
    }


    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
    }



    return {
        //Propiedades
        errorMessage,
        status,
        user,



        //Metodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
        
    }
}