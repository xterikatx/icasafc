import React from 'react';
import './styles.css';
// import { Container } from './styles';
const img = require('../../assets/insta.png')
function Footer() {
  return (
    <footer>
      <div>
        <span>Associação Desportiva Recreativa e Cultural Icasa<br />Icasafc.com - Todos os direitos reservados.</span>
      </div>
      <div className="form">
        <form>
          <img src={img} alt="" className="img"/>
          <a>Contato:</a>
          <input id="caixa" className="img-one" placeholder="E-mail:" />
          <input id="caixa" className="img-two" placeholder="Nome:" />
        </form>
        <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
        <input type="button" value="Enviar"></input>
      </div>
    </footer>
  )

}
export default Footer;