import React from 'react';
import './index.css';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
const img5 = require('../../assets/foto5.jpg')
const img1 = require('../../assets/foto1.jpg')
const img2 = require('../../assets/foto2.jpg')
const img6 = require('../../assets/foto6.jpg')
const img3 = require('../../assets/foto3.jpg')

function News() {
  return(
  <div>
        <Link style={{marginLeft: '90px',}} href="/home" color="inherit" variant="subtitle2">
            {'Inicio'}
        </Link>
        <Link color="inherit" variant="subtitle2">
            {' > '}
        </Link>
        <Link href="/Noticia" color="inherit" variant="subtitle2">
            {'Noticia'}
        </Link>
    <div style={{marginLeft: '90px', width: '740px'}}>
        <a><h1 style={{marginTop: 10, marginBottom:10,}}>Barulhos estranhos no céu assustam pessoas de todo o mundo</h1></a>
        <Typography style={{ marginBottom:15,}} className="txtnot" variant="body1" color="initial">
        A desenvolvedora de soluções tecnológicas com gerador de ozônio (O3) pode ter encontrado 
        uma nova arma contra o coronavírus.
        </Typography>
    </div>

    <img className="banner" src={img1} alt="Foto de capa" />
    <h6 style={{marginLeft: '90px', marginTop: '0px'}}>Fonte: Google</h6>
    <h6 style={{marginLeft: '90px', marginTop: '0px'}}>30 Abril 2020</h6>

    <div style={{height: '3vh', marginLeft: '5%', width: '55%', marginTop: '30px', lineHeight: 1.6, marginBottom: '130px'}}>
        <Typography className="txtnot" variant="body1" color="initial">
            A desenvolvedora de soluções tecnológicas com gerador de ozônio (O3) pode ter
            encontrado uma nova arma contra o coronavírus. Após realizar testes com o gás
            no laboratório da Universidade Federal de Santa Catarina, a Wier, startup em questão,
            constatou que ele foi eficiente na eliminação de 99,9% das amostras de dois tipos de
            vírus em ambientes fechados e com alto fluxo de pessoas – sendo que um deles
            possui semelhanças com o Sars-CoV-2, causador da covid-19.
        </Typography>
    </div>
    <div style={{height: '3vh', marginLeft: '5%', width: '55%', marginTop: '30px', lineHeight: 1.6}}>
        <Typography className="txtnot" variant="body1" color="initial">
            A desenvolvedora de soluções tecnológicas com gerador de ozônio (O3) pode ter
            encontrado uma nova arma contra o coronavírus. Após realizar testes com o gás
            no laboratório da Universidade Federal de Santa Catarina, a Wier, startup em questão,
            constatou que ele foi eficiente na eliminação de 99,9% das amostras de dois tipos de
            vírus em ambientes fechados e com alto fluxo de pessoas – sendo que um deles
            possui semelhanças com o Sars-CoV-2, causador da covid-19.
        </Typography>
    </div>

    <section className="blocknews">
        <div className="moresse"><a style={{position: 'relative', fontWeight: 'bold'}}>Mais Lidas:</a></div>

        <div id="morenews">
            <a href="/Noticia"><img id="photonews" src={img2} alt="foto" /></a>
            <h5><a href="/Noticia">Veja as ultimas noticias relacionadas da internet</a></h5>
            <h6 className="date"><a>20/20/2020</a></h6>
        </div>

        <div id="morenews">
            <a href="/Noticia"><img id="photonews" src={img6} alt="foto" /></a>
            <h5><a href="/Noticia">Veja as ultimas noticias relacionadas da internet</a></h5>
            <h6 className="date"><a>20/20/2020</a></h6>
        </div>

        <div id="morenews">
            <a href="/Noticia"><img id="photonews" src={img5} alt="foto" /></a>
            <h5><a href="/Noticia">Veja as ultimas noticias relacionadas da internet</a></h5>
            <h6 className="date"><a>20/20/2020</a></h6>
        </div>

        <div id="morenews">
            <a href="/Noticia"><img id="photonews" src={img5} alt="foto" /></a>
            <h5><a href="/Noticia">Veja as ultimas noticias relacionadas da internet</a></h5>
            <h6 className="date"><a>20/20/2020</a></h6>
        </div>

        <div id="morenews">
            <a href="/Noticia"><img id="photonews" src={img5} alt="foto"/></a>
            <h5><a href="/Noticia">Veja as ultimas noticias relacionadas da internet</a></h5>
            <h6 className="date"><a>20/20/2020</a></h6>
        </div>
    </section>

  </div>
  );
}

export default News;
