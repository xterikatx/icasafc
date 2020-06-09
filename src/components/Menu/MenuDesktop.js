import React from 'react';
import './styles.css';
const logo = require('../../assets/logo.png')

export default function MenuDesktop() {
  return (
    <header>
      <img alt="Logo do icasa" class="logo" src={logo} />
      <div class="head">
        <ul>
          <div class="margin">
            <li><a class="" href="index.html">Início</a></li>
            <li><a href="/">O clube</a></li>
            <li><a href="/">Tabelas</a></li>
            <li><a href="/">Notícias</a></li>
            <li><a href="/">Programação</a></li>
            <li><a href="/">Mídia</a></li>
            <li><a href="/">Contato</a></li>
          </div>
          </ul>
      </div>
    </header>
  )
}