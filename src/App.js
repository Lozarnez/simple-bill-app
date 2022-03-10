import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo, ContenedorHeader, ContenedorBotones } from './components/Header';
import { Boton } from './components/Boton';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            <Boton to="/categorias">Categorías</Boton>
            <Boton to="/gastos">Gastos</Boton>
            <Boton to="/">X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  )
}

export default App;