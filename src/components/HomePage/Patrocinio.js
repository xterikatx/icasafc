import React from 'react';
// import { Container } from './styles';
import './patrocinio.css';
const imagens = require('../../assets/banner.PNG')
const newPhoto = require('../../assets/foto5.jpg');

function Patrocinio() {

  return (
    <div className="sponsorship">
      <h3>Patrocinio</h3>
      <iframe width="310" height="175" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="310" height="175" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Patrocinio;
