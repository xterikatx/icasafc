import React from 'react';

import './styles.css';
const logo = require('../../assets/logo.png')
const img1 = require('../../assets/foto1.jpg')
const img2 = require('../../assets/foto2.jpg')
const img3 = require('../../assets/foto3.jpg')
const img6 = require('../../assets/foto6.jpg')
const img5 = require('../../assets/foto5.jpg')

function Midia() {
  return (
    <div className="body">
      <div className="wrapper">
        {/* indicador */}
        <div className="where_i_am">
          <a href="/">Inicio</a> {'>'} <a href="/" >Galeria</a>
        </div>

        {/* logo */}
        <div className="container1">
          <a href="/"><img src={logo} alt="Logo do icasa" style={{ marginLeft: '550px', height: '43px', width: '62px', marginTop: '3px' }} /></a>
          <div className="margingallery">
            <a>Fotos</a>
          </div>
        </div>

        {/* image grid list */}
        <div className="container2">
          <div className="cont">
            <img className="fotos" src={img1} style={{ height: '152px' }} />
            <img className="fotos" src={img2} style={{ height: '152px' }} />
            <img className="fotos" src={img3} style={{ height: '152px' }} />
            <img className="fotos" src={img6} style={{ height: '152px' }} />
            <img className="fotos" src={img5} style={{ height: '152px' }} />
          </div>

          <div className="cont">
            <img className="fotos" src={img1} style={{ height: '152px' }} />
            <img className="fotos" src={img2} style={{ height: '152px' }} />
            <img className="fotos" src={img3} style={{ height: '152px' }} />
            <img className="fotos" src={img6} style={{ height: '152px' }} />
            <img className="fotos" src={img5} style={{ height: '152px' }} />
          </div>
        </div>

        {/* title video grid list */}
        <div className="container3">
          <a><img src={logo} alt="Logo do icasa" style={{ marginLeft: '550px', height: '43px', width: '62px', marginTop: '3px' }} /></a>
          <div className="margingallery">
            <a>Videos</a>
          </div>
        </div>

      {/* videos grid list */}
      <div className="container4">
			<div style={{marginLeft: '30px'}}>
				<iframe style={{marginLeft: '50px', marginTop: '25px'}} width="336" height="222" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<iframe style={{marginLeft: '50px', marginTop: '25px'}} width="336" height="222" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<iframe style={{marginLeft: '50px', marginTop: '25px'}} width="336" height="222" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>

      </div>
    </div>
  );
}

export default Midia;