import React from 'react';
import './index.css';

const img5 = require('../../assets/foto5.jpg')
const img1 = require('../../assets/foto1.jpg')
const img2 = require('../../assets/foto2.jpg')
const img6 = require('../../assets/foto6.jpg')
const img3 = require('../../assets/foto3.jpg')

function News() {
  return(
  <div>
     <div style={{marginLeft: '90px', width: '740px'}}>
        <a><h1>Barulhos estranhos no céu assustam pessoas de todo o mundo</h1></a>
    </div>

    <img className="banner" src={img1} alt="Foto de capa" />
    <h6 style={{marginLeft: '90px', marginTop: '0px'}}>Fonte: Google</h6>

    <div style={{height: '10px', marginLeft: '90px', width: '720px', marginTop: '30px', lineHeight: 1.6, marginBottom: '130px'}}>
        <a>A desenvolvedora de soluções tecnológicas com gerador de ozônio (O3) pode ter
            encontrado uma nova arma contra o coronavírus. Após realizar testes com o gás
            no laboratório da Universidade Federal de Santa Catarina, a Wier, startup em questão,
            constatou que ele foi eficiente na eliminação de 99,9% das amostras de dois tipos de
            vírus em ambientes fechados e com alto fluxo de pessoas – sendo que um deles
            possui semelhanças com o Sars-CoV-2, causador da covid-19.
        </a>
    </div>
    <div style={{height: '10px', marginLeft: '90px', width: '720px', marginTop: '30px', lineHeight: 1.6}}>
        <a>A desenvolvedora de soluções tecnológicas com gerador de ozônio (O3) pode ter
            encontrado uma nova arma contra o coronavírus. Após realizar testes com o gás
            no laboratório da Universidade Federal de Santa Catarina, a Wier, startup em questão,
            constatou que ele foi eficiente na eliminação de 99,9% das amostras de dois tipos de
            vírus em ambientes fechados e com alto fluxo de pessoas – sendo que um deles
            possui semelhanças com o Sars-CoV-2, causador da covid-19.
        </a>
    </div>

    {/* <div className="othernews">
        <p><h2>Outras Notícias:</h2></p>
        <div style={{lineHeight: 2}}>
            <a href="/">11/07/2011 - VOLANTE LEANDRO ASSIS   O NOVO REFOR O DO VERD O ...</a>
            <br />
            <a href="/">11/07/2011 - VERD O RETOMA TREINAMENTOS PARA DOIS JOGOS FORA ...</a>
            <br />
            <a href="/">09/07/2011 - DE VIRADA, ICASA PERDE INVENCIBILIDADE NO ROMEIR O ...</a>
            <br />
            <a href="/">08/07/2011 - VERD O ENCERRA TREINAMENTOS PARA PEGAR O N UTICO ...</a>
            <br />
            <a href="/">08/07/2011 - CBF MUDA LOCAL DO JOGO DUQUE DE CAXIAS X ICASA ...</a>
            <br />
            <a href="/">07/07/2011 - VERD O DO CARIRI FAZ MOVIMENTADO COLETIVO ...</a>
            <br />
            <a href="/">07/07/2011 - INGRESSOS PARA ICASA X N UTICO J  EST O   VENDA ...</a>
            <br />
            <a href="/">07/07/2011 - ARBITRO BAIANO DIRIGE ICASA X N UTICO ...</a>
        </div>
    </div> */}

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
