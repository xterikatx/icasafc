
import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import history from './history';

import HomePage from './components/HomePage';
import Club from './components/Club'
import Tabelas from './components/StickyHeadTable';
//AQUI ADICIONA TODAS OS COMPONENTES QUE VÃO SER RENDERIZADOS.
export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        {/**exact é pra dizer que o componente só pode renderizar na path especificada */}
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/home'} component={HomePage} />
        <Route exact path={'/club'} component={Club} />
        <Route exact path={'/Tabelas'} component={Tabelas} />
      </Switch>
    </Router>
  );
}
