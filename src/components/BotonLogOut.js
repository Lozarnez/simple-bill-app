import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from "react-icons/fa";
import Boton from './Boton';
import {auth} from '../firebase/config';

function BotonLogOut() {
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate('/iniciar-sesion');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Boton iconoGrande as='button' onClick={logOut}>
      <FaSignOutAlt />
    </Boton>
  )
}

export default BotonLogOut;