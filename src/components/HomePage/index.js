import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import './styles.css';
import { Link } from 'react-router-dom';
const imagens = require('../../assets/banner.PNG')
const newPhoto = require('../../assets/foto5.jpg')
function HomePage() {
  return (
    <div>
      <AwesomeSlider className='aws-btn'>
        <div data-src={imagens} />
        <div data-src={imagens} />
        <div data-src={imagens} />
      </AwesomeSlider>

      <div className="newstwo">
        <h3>Notícias do time</h3>
        <div>
          <a href="news.html"><img className="photonews" src={newPhoto} alt="foto" /></a>
          <h4><a href="news.html">Veja as ultimas noticias relacionadas da internet</a></h4>
          <h6 className="date"><a>20/20/2020</a></h6>
        </div>
        <div>
          <a href="news.html"><img className="photonews" src={newPhoto} alt="foto" /></a>
          <h4><a href="news.html">Veja as ultimas noticias relacionadas da internet</a></h4>
          <h6 className="date"><a>20/20/2020</a></h6>
        </div>
        <div>
          <a href="news.html"><img className="photonews" src={newPhoto} alt="foto" /></a>
          <h4><a href="news.html">Veja as ultimas noticias relacionadas da internet</a></h4>
          <h6 className="date"><a>20/20/2020</a></h6>
        </div>
      </div>

    </div>
  )
}

export default HomePage;


