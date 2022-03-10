import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import WebFont from 'webfontloader';
import {Helmet} from 'react-helmet';
import './index.css';
import favicon from './img/logo.png';
import App from './App';
import Contenedor from './components/Contenedor';
import Fondo from './components/Fondo';
import Registro from './views/Registro';
import InicioSesion from './views/InicioSesion';
import ListaGastos from './views/ListaGastos';
import GastoEditar from './views/GastoEditar';
import GastosPorCategoria from './views/GastosPorCategoria';

WebFont.load({
  google: {
    // families: Work+Sans:wght@400;500;700
    families: ['Work+Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/png" sizes='16x16' />
        <title>Gastos</title>
      </Helmet>
      <BrowserRouter>
        <Contenedor>
          <Routes>
            <Route path="/iniciar-sesion" element={<InicioSesion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/gastos" element={<ListaGastos />} />
            <Route path="/gasto/:id" element={<GastoEditar />} />
            <Route path="/categorias" element={<GastosPorCategoria />} />
            <Route path="/" element={<App />} />
          </Routes>
        </Contenedor>
      </BrowserRouter>
      <Fondo />
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
