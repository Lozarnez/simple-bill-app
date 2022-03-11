import React, { useState } from 'react';
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { ContenedorHeader, Header, Titulo } from "../components/Header";
import { ContenedorBoton, Formulario, Input } from "../components/Formulario";
import Boton from "../components/Boton";
import Alerta from "../components/Alerta";
import { ReactComponent as SvgLogin } from "../img/login.svg";
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../firebase/config';

const InicioSesion = () => {
  const navigate = useNavigate();
  const [alertaState, setAlertaState] = useState(false);
  const [alerta, setAlerta] = useState({ tipo: "", mensaje: "" });
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertaState(false);
    setAlerta({ tipo: "", mensaje: "" });
    const { email, password } = formulario;
    const RegEx = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (!email || !password) {
      setAlertaState(true);
      setAlerta({
        tipo: "error",
        mensaje: "Todos los campos son obligatorios",
      });
      return;
    }

    if (!RegEx.test(email)) {
      setAlertaState(true);
      setAlerta({ tipo: "error", mensaje: "El correo no es válido" });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setAlertaState(true);
      let mensaje;
      switch (error.code) {
        case "auth/wrong-password":
          mensaje = "La contraseña es incorrecta";
          break;
        case "auth/user-not-found":
          mensaje = "El usuario no existe";
          break;
        default:
          mensaje = "Error desconocido";
          break;
      }
      setAlerta({ tipo: "error", mensaje });
    }
  };

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
        <ContenedorBoton>
          <Boton as="button" type="submit" primario>
            Iniciar sesión
          </Boton>
        </ContenedorBoton>
      </Formulario>
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        alertaState={alertaState}
        setAlertaState={setAlertaState}
      />
    </>
  );
}

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem; /* 200px */
  margin-bottom: 1.5rem; /* 20px */
`;

export default InicioSesion;