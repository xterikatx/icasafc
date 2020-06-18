import React from 'react';
import './styles.css';
// import { Container } from './styles';
const img = require('../../assets/insta.png')
function Footer() {
  return (
      <footer>
        {/* <div>
            <span>Associação Desportiva Recreativa e Cultural IcasaIcasafc.com - Todos os direitos reservados.</span>
        </div> */}
        <div className="form">
            <form>
                <img src={img} className="img"alt=""/>
                <a>Contato:</a>
                <input className="caixa a" placeholder="E-mail:"/>
                <input className="caixa b" placeholder="Nome:"/>
            </form>
            <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
            <button className="in">Enviar</button>
        </div>
    </footer>
  )

}
export default Footer;
