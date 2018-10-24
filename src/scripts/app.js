import { qs, qsa } from './components/qs';

console.log(qs('body'));
console.log(qs('h1', 'body'));
console.log(qsa('p', 'body'));
console.log(qsa('.hello'));


