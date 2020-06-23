import React from 'react';
import './styles.css';

const logo = require('../../assets/logo.png')
const img1 = require('../../assets/foto1.jpg')
const img2 = require('../../assets/foto2.jpg')
const img3 = require('../../assets/foto3.jpg')
const img6 = require('../../assets/foto6.jpg')
const img5 = require('../../assets/foto5.jpg')


// const logo = require('../../assets/logo.png');

function Midia() {

  return (
    <div className="body">

      <div className="wrapper">
        
        
        <div className="divmob">
        <img className="mobimg" alt="" src={img1}></img>
        <img className="mobimg" alt="" src={img1}></img>
        <img className="mobimg" alt="" src={img1}></img>
        <img className="mobimg" alt="" src={img1}></img>
        </div>

        <div className="divmob2">
        <iframe width="97%" height="175" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="97%" height="175" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


      </div>
    </div>
  );
}

export default Midia;