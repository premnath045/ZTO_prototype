import React, {useEffect, useState} from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../Pages/404';
import ZTODashboard from '../Pages/ZTODashboard/index.js';
import IdentityPortal from '../Pages/ZTOIdentity/identityPortal.js';

export default function MainRouter() {
  const [loggedInUser, setLoggedInUser] = useState();

  const getLoggedInUser = async () => {
    try {
      const res = await getUserApi();
      if (res.status === 200) {
        setLoggedInUser(res.data.user[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <>
      <Routes>
        <Route />

        <Route
          path='dashboard' 
          element ={ 
            <ZTODashboard /> 
          } 
        />

        <Route
          path='identity-portal'
          element={
            <IdentityPortal />
          }
        />

        

      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </>
  );
}
