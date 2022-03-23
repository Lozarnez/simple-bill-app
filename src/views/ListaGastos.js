import React from 'react';
import { Helmet } from "react-helmet";
import { useAuth } from '../context/Auth';
import { Header, Titulo } from "../components/Header";
import BotonRegresar from "../components/BotonRegresar";

const ListaGastos = () => {
  const { usuario } = useAuth();
  console.log(usuario);

  return (
    <>
      <Helmet>
        <title>Gastos</title>
      </Helmet>
      <Header>
        <BotonRegresar />
        <Titulo>Lista de gastos</Titulo>
      </Header>
    </>
  );
}

export default ListaGastos;