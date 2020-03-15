import '@babel/polyfill';

function test() {
	console.log('testing');
}
const fn = (e, i) => {
	console.log('fn', e, i);
};
test();
fn(1, 2);
