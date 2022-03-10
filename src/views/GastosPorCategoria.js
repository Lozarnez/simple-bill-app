import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo } from '../components/Header';
import BotonRegresar from '../components/BotonRegresar';

const GastosPorCategoria = () => {
  return (
    <>
      <Helmet>
        <title>Gastos por categoría</title>
      </Helmet>
      <Header>
        <BotonRegresar />
        <Titulo>Gastos por categoría</Titulo>
      </Header>
    </>
  );
}

export default GastosPorCategoria;