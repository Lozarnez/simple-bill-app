import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../firebase/config';
import { ContenedorHeader, Header, Titulo } from "../components/Header";
import { ContenedorBoton, Formulario, Input } from "../components/Formulario";
import Boton from "../components/Boton";
import Alerta from "../components/Alerta";
import { ReactComponent as SvgLogin } from "../img/registro.svg";

const Registro = () => {
  const navigate = useNavigate();
  const [alertaState, setAlertaState] = useState(false);
  const [alerta, setAlerta] = useState({ tipo: "", mensaje: "" });
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    setAlertaState(false);
    setAlerta({ tipo: "", mensaje: "" });
    const { email, password, password2 } = formulario;
    const RegEx = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (!email || !password || !password2) {
      setAlertaState(true);
      setAlerta({ tipo: "error", mensaje: "Todos los campos son obligatorios" });
      return;
    }

    if (!RegEx.test(email)) {
      setAlertaState(true);
      setAlerta({ tipo: "error", mensaje: "El correo no es válido" });
      return;
    }

    if(password !== password2){
      setAlertaState(true);
      setAlerta({ tipo: "error", mensaje: "Las contraseñas no coinciden" });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setAlertaState(true);
      let mensaje;
      switch (error.code) {
        case "auth/email-already-in-use":
          mensaje = "El email ya está en uso";
          break;
        case "auth/invalid-email":
          mensaje = "El email no es válido";
          break;
        case "auth/weak-password":
          mensaje = "La contraseña es muy débil. Debe tener al menos 6 caracteres";
          break;
        default:
          mensaje = "Error desconocido";
          break;
      }
      setAlerta({ tipo: "error", mensaje });
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
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        alertaState={alertaState}
        setAlertaState={setAlertaState}
      />
    </>
  );
};

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.5rem; /* 20px */
`;

export default Registro;
