import React from 'react';
import FontSizeChanger from 'react-font-size-changer';


import './MenuDesktop.css';
const logo = require('../../assets/logo.png')

export default function MenuDesktop() {
  return (
    <div>
      <header>
        <img alt="Logo do icasa" className="logo" src={logo} />
        <div className="head">
          <ul class="ul">
            <div class="margin">
              <li className="font"><a class="" href="/home">Início</a></li>
              <li  className="font"><a href="/">O clube</a></li>
              <li  className="font"><a href="/Tabelas">Tabelas</a></li>
              <li  className="font"><a href="/club">Notícias</a></li>
              <li  className="font"><a href="/">Programação</a></li>
              <li  className="font"><a href="/Midia">Mídia</a></li>
              <li  className="font"><a href="/">Contato</a></li>
              <li>
                <FontSizeChanger
                  targets={['.font']} //aqui deve ficar as class que tem que alterar
                  onChange={(element, newValue, oldValue) => {
                    console.log(element, newValue, oldValue);
                  }}
                  options={{
                    stepSize: 2,
                    range: 3
                  }}
                  customButtons={{
                    up: <span style={{ 'fontSize': '36px' }}>A+</span>,
                    down: <span style={{ 'fontSize': '20px' }}>A-</span>,
                    style: {
                      backgroundColor: 'red',
                      color: 'white',
                      WebkitBoxSizing: 'border-box',
                      WebkitBorderRadius: '5px',
                      width: '60px'
                    },
                    buttonsMargin: 10
                  }}
                />
              </li>
            </div>
          </ul>
        </div>
      </header>
    </div>
  )
}
