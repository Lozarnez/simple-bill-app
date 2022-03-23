import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../context/Auth';

function RutaPrivada({ children }) {
  const {usuario} = useAuth();

  if(usuario){
    return children;
  } else {
    return <Navigate replace to="/iniciar-sesion" />;
  }
}

export default RutaPrivada;