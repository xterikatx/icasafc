import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import './styles.css';
import NoticiaTime from './ContainerNoticias';
import NoticiaJogos from './NoticiaJogos';
import Patrocinio from './Patrocinio';
import Address from './Address';
import Footer from '../Footer';

const imagens = require('../../assets/banner.PNG')
const imgs = require('../../assets/banner-slider.jpg')
function HomePage() {
  return (
    <div className="all_components">
      <AwesomeSlider cssModule={AwsSliderStyles} className='aws-btn'>
        <div data-src={imgs} />
        <div data-src={imgs} />
        <div data-src={imgs} />
      </AwesomeSlider>
      {/*section de noticias aqui*/}
      <NoticiaTime />
      <NoticiaJogos />
      <Patrocinio />
      <Address />
      <Footer />
    </div>
  )
}

export default HomePage;
