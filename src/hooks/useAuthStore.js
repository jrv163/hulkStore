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
        console.log( email, password )

        try {
            
            const { data } = await hulkApi.post('/auth/new', { email, password, name });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime()); // desde el frontend podemos ver que el token es permitido
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            dispatch( onLogout(error.response.data?.msg || '') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10)
        }
    }





    return {
        //Propiedades
        errorMessage,
        status,
        user,



        //Metodos
        startLogin,
        startRegister,
        
    }
}