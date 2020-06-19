import React from 'react';

import './styles.css';
const logo = require('../../assets/logo.png')
function Midia() {
  return (
    <div className="body">
      <div className="wrapper">
        {/* indicador */}
        <div className="where_i_am">
          <a href="/">Inicio</a> {'>'} <a href="/" >Galeria</a>
        </div>

        <div className="container1">
          <a href="/"><img src={logo} alt="Logo do icasa" style={{ marginLeft: '550px', height: '43px', width: '62px', marginTop: '3px' }} /></a>
          <div className="margingallery">
            <a>Fotos</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Midia;