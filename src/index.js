import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import WebFont from 'webfontloader';
import {Helmet} from 'react-helmet';
import './index.css';
import { AuthProvider } from './context/Auth';
import favicon from './img/logo.png';
import App from './App';
import Contenedor from './components/Contenedor';
import Fondo from './components/Fondo';
import Registro from './views/Registro';
import InicioSesion from './views/InicioSesion';
import ListaGastos from './views/ListaGastos';
import GastoEditar from './views/GastoEditar';
import GastosPorCategoria from './views/GastosPorCategoria';
import RutaPrivada from './views/RutaPrivada';

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
        <link rel="shortcut icon" href={favicon} type="image/x-icon" sizes='16x16' />
      </Helmet>

      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
            <Routes>
              <Route path="/iniciar-sesion" element={<InicioSesion />} />
              <Route path="/registro" element={<Registro />} />

              <Route path='/gastos' element={
                <RutaPrivada>
                  <ListaGastos />
                </RutaPrivada>
              } />
              <Route path='/gastos/:id' element={
                <RutaPrivada>
                  <GastoEditar />
                </RutaPrivada>
              } />
              <Route path='/categorias' element={
                <RutaPrivada>
                  <GastosPorCategoria />
                </RutaPrivada>
              } />
              <Route path='/' element={
                <RutaPrivada>
                  <App />
                </RutaPrivada>
              } />

            </Routes>
          </Contenedor>
        </BrowserRouter>
      </AuthProvider>

      <Fondo />
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
