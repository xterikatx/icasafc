import React from 'react';
import './MenuDesktop.css';
import SwipeableTextMobileStepper from '../HomePage';
const logo = require('../../assets/logo.png')

export default function MenuDesktop() {
  return (
    <div>
    <header>
      <img alt="Logo do icasa" className="logo" src={logo} />
      <div className="head">
        <ul class="ul">
          <div class="margin">
            <li><a class="" href="/home">Início</a></li>
            <li><a href="/club">O clube</a></li>
            <li><a href="/">Tabelas</a></li>
            <li><a href="/">Notícias</a></li>
            <li><a href="/">Programação</a></li>
            <li><a href="/">Mídia</a></li>
            <li><a href="/">Contato</a></li>
          </div>
          </ul>
      </div>
    </header>
    </div>
  )
}
