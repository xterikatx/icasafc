import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import './styles.css';
import './patrocinio.css';

const newPhoto = require('../../assets/foto5.jpg');
const imagens = require('../../assets/banner.PNG');
const imgs = require('../../assets/banner-slider.jpg');

function HomePage() {
  return (
    <div className="all_components">
      <AwesomeSlider className='aws-btn' >
        <div data-src={imgs} />
        <div data-src={imgs} />
        <div data-src={imgs} />
      </AwesomeSlider>
      {/*section de noticias aqui*/}

      <div className="newsJogoss">
      <h3>Notícias de Jogos 2</h3>
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

      <div className="sponsorship">
        <h3>Patrocinio</h3>
        <iframe width="310" height="175" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="310" height="175" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <section className="cta" >
        <div className="inner">
          <img className="img-address" alt=""/>
          <h1>Nossa Localização</h1>
          <p>Rua Frei Damião, 1720 - CEP: 63040-640 - Lagoa Seca - Juazeiro do Norte-CE</p>
          <p>Fone-Fax: (88)3571- 3060.</p>
        </div>
      </section>

    </div>

  )
}

export default HomePage;