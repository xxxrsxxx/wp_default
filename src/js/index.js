'use strict';

import '@babel/polyfill';
import { testfn, fn2 } from './resource/test';

function test() {
	console.log('testing');
}
const fn = (e, i) => {
	console.log('fn', e, i);
};

const hello = document.querySelector('.test');

console.log('hello', hello);

testfn();
fn2();
test();
fn(1, 2);

window.onload = function() {
	fn2();
};
