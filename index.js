var BigNumber = require('bignumber.js');
var Decimal = require('decimal.js');

var const108 = getNumber(108);
var const815 = getNumber(815);
var const1500 = getNumber(1500);
var const4 = getNumber(4);
var const4d25 = getNumber(17/4); // 4.25

function getNumber(number) {
	if (process.env.LIB === 'big') {
		return new BigNumber(number);
	} else if (process.env.LIB === 'dec') { 
		return new Decimal(number);
	}
}

function f(y, z) {
	//108 - (815-1500/z)/y
	return const108.minus(const815.minus(const1500.dividedBy(z)).dividedBy(y));
}

function x(i) {
	if (i === 0) {
		return const4;
	}

	if (i === 1) {
		return const4d25;
	}

	return f(x(i-1), x(i-2));
}


function calc() {
	var table = [];
	var N = 30;

	for (var i = 0; i < N; i++) {
		console.log('%d\t%d', i, x(i));
	}

}

calc();
