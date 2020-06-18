import React from 'react';
// import { Container } from './styles';
import './styles.css';
const imagens = require('../../assets/banner.PNG')
const newPhoto = require('../../assets/foto5.jpg');

function NoticiaJogos() {

  return (
    <div className="newsJogos2">
    <h3>Notícias de Jogos</h3>
      <div className="newstwo">
        <a href="/Noticia"><img className="photonews" src={newPhoto} alt="foto" /></a>
        <h4><a href="/Noticia">Veja as ultimas noticias relacionadas da internet</a></h4>
        <h6 className="date"><a>20/20/2020</a></h6>
      </div>

      <div className="newstwo">
        <a href="/Noticia"><img className="photonews" src={newPhoto} alt="foto" /></a>
        <h4><a href="/Noticia">Veja as ultimas noticias relacionadas da internet</a></h4>
        <h6 className="date"><a>20/20/2020</a></h6>
      </div>


      <div className="newstwo">

        <a href="/Noticia"><img className="photonews" src={newPhoto} alt="foto" /></a>
        <h4><a href="/Noticia">Veja as ultimas noticias relacionadas da internet</a></h4>
        <h6 className="date"><a>20/20/2020</a></h6>
      </div>
    </div>
  )
}

export default NoticiaJogos;
