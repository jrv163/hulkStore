import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HulkPage } from '../hulkStore';


export const AppRouter = () => {

    
    const authStatus = 'checking'; //'not-authenticated'; // 'authenticated' 

  
  return (

      <Routes>
            {
                ( authStatus === 'not-authenticated' )
                    ? <Route path='/auth/*' element={ <LoginPage /> }/>
                    : <Route path='/*' element={ <HulkPage />}/>
            }

                <Route path='/*' element={ <Navigate to="/auth/login" />}/>
      </Routes>
  )
}
