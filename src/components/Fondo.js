import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Puntos } from '../img/puntos.svg';

const Fondo = () => {
  return (
    <>
      <PuntosArriba />
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio='none'>
        <path fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </Svg>
      <PuntosAbajo />
    </>
  )
}

const Svg = styled.svg`
  height: 50vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 0;
  path {
      fill: rgba(135,182,194, .15);
  }
`;

const PuntosArriba = styled(Puntos)`
  position: fixed;
  z-index: 1;
  top: 2.5rem; /* 40px */
  left: 2.5rem; /* 40px */
`;

const PuntosAbajo = styled(Puntos)`
  position: fixed;
  z-index: 1;
  bottom: 2.5rem; /* 40px */
  right: 2.5rem; /* 40px */
`;

export default Fondo;