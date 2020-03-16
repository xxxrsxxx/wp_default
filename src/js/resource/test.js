'use strict';

function testfn() {
	console.log('test.js');
}

const fn2 = () => {
	const anchor = document.querySelector('.test');
	console.log('arrorfn2', anchor);
};
export { testfn, fn2 };
