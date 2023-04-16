import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { useAuthStore } from '../hooks';
import { HulkPage } from '../hulkStore';
import { HulkForms } from '../hulkStore/pages/HulkForms';



export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    // const authStatus = 'not-authenticated'; //'not-authenticated'; // 'authenticated' 

    useEffect(() => {
        checkAuthToken();
    }, [])
    


    if ( status === 'checking' ) {
        return (
            <h3>Cargando...</h3>
        )
    }

  return (

      <Routes>
            {
                ( status === 'not-authenticated' )
                    ?(
                        <>
                         <Route path='/auth/*' element={ <LoginPage /> }/>
                         <Route path='/*' element={ <Navigate to="/auth/login" />}/>
                        </>
                    ) 
                    : (
                        <>
                             <Route path='/*' element={ <HulkPage />}/>
                             <Route path='/forms' element={ <HulkForms/>}/>
        
                             <Route path='/*' element={ <Navigate to="/" />}/>
                        </>
                    )
                        
            }

                
      </Routes>
  )
}
