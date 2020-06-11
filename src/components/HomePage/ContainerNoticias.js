import React from 'react';
// import { Container } from './styles';
import './styles.css';
const imagens = require('../../assets/banner.PNG')
const newPhoto = require('../../assets/foto5.jpg');

function NoticiaTime() {

  return (
    <div className="newsJogos">
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
  )
}

export default NoticiaTime;