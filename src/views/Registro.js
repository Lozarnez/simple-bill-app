import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { ContenedorHeader, Header, Titulo } from "../components/Header";
import { ContenedorBoton, Formulario, Input } from "../components/Formulario";
import { Boton } from "../components/Boton";
import { ReactComponent as SvgLogin } from "../img/registro.svg";

const Registro = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, password2 } = formulario;

    const RegEx = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!RegEx.test(email)) {
      alert("El email no es válido");
      return;
    }

    if(!email || !password || !password2){
      alert("Todos los campos son obligatorios");
      return;
    }

    if(password !== password2){
      alert("Las contraseñas no coinciden");
      return;
    }
  }

  return (
    <>
      <Helmet>
        <title>Crear cuenta</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Crear cuenta</Titulo>
          <div>
            <Boton to="/iniciar-sesion">Iniciar sesión</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formulario.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formulario.password}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password2"
          placeholder="Confirmar contraseña"
          value={formulario.password2}
          onChange={handleChange}
        />
        <ContenedorBoton>
          <Boton as="button" type="submit" primario>
            Crear cuenta
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
};

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.5rem; /* 20px */
`;

export default Registro;
