import React from 'react';
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { ContenedorHeader, Header, Titulo } from "../components/Header";
import { ContenedorBoton, Formulario, Input } from "../components/Formulario";
import Boton from "../components/Boton";
import { ReactComponent as SvgLogin } from "../img/login.svg";

const InicioSesion = () => {
  return (
    <>
      <Helmet>
        <title>Iniciar sesión</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar sesión</Titulo>
          <div>
            <Boton to="/registro">Registrarse</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario>
        <Svg />
        <Input type="email" name="email" placeholder="Correo electrónico" />
        <Input type="password" name="password" placeholder="Contraseña" />
        <ContenedorBoton>
          <Boton as="button" type="submit" primario>
            Iniciar sesión
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
}

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem; /* 200px */
  margin-bottom: 1.5rem; /* 20px */
`;

export default InicioSesion;