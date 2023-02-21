// Import stylesheets

import { MyTimer } from './contador';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let Contador = new MyTimer(
  document.getElementById('tempo'),
  document.getElementById('acao'),
  document.getElementById('ciclo')
);
document.getElementById('comecar').addEventListener('click', () => {
  Contador.start();
});
document.getElementById('parar').addEventListener('click', () => {
  Contador.stop();
});
