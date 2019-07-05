function add (...theArgs) {
	return theArgs.reduce((previous, current) => {return previous + current});
}

function subtract (...theArgs) {
	return theArgs.reduce((previous, current) => {return previous - current});
}

function sum(theArgs) {
	//console.log(theArgs);
	let sum  = 0;
	for (let arg of theArgs) {
		sum += arg;
	}
	return sum; 
}

function multiply (theArgs) {
	//console.log(theArgs);
	var product = 1;
	for (let arg of theArgs) {
		var product = arg * product;
	}
	//console.log("product =  " + product);
	return product;
	
}

function power(base, power) {
	let total = 1;
	for (let i = 0; i < power; i++) {
		total = total * base;
	}
	return total;
}

function factorial(power) {
	for (let i=power-1; i>0; i--) {
		power = i * power;
	}
	if (power===0) {
		power=1;
	}
	console.log(power);
	return power;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}





