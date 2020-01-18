import React from 'react';
/*REACT É IMPORTADO DENTRO DE TODO ARQUIVO JAVASCRIPT QUE FOR UTILIZAR HTML DENTRO DELE*/
import ReactDOM from 'react-dom';
// RDOM dá habilidade de o React se comunicar com a arvore de elementos da nossa aplicação
import App from './App';
// é um arquivo criado no proprio projeto (App.js)

ReactDOM.render(<App />, document.getElementById('root')); // JSX ( JS + HTML)
 
