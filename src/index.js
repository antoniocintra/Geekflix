import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>Página 404</div>)
ReactDOM.render(
   
   
   <BrowserRouter>
    <Switch>
      
      <Route path="/" component={Home} exact ></Route>
      <Route path="/cadastro/video" component={CadastroVideo}></Route>
      <Route path="/cadastro/Categoria" component={CadastroCategoria}></Route>
      <Route component={Pagina404}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);