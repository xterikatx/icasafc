import React from 'react';
import { BrowserRouter, Switch, Route, Router} from 'react-router-dom';
import history from './history';

import HomePage from './components/HomePage';
import Club from './components/Club';
//AQUI ADICIONA TODAS OS COMPONENTES QUE VÃO SER RENDERIZADOS.
export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        {/**exact é pra dizer que o componente só pode renderizar na path especificada */}
        <Route path={'/home'} component={HomePage} /> 
        <Route exact path={'/club'} component={Club} />
      </Switch>
    </Router>
  );
}