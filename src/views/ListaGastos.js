import React from 'react';
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../components/Header";
import BotonRegresar from "../components/BotonRegresar";

const ListaGastos = () => {
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