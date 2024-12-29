//create function that reverses a string
//'Hi My name is Alaina' should be
// 'anailA si eman yM iH'

function reverse(str) {
	//check input
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'Hmm that is not good';
	}

	const backwards = [];
	const totalitems = str.length - 1;
	for (let i = totalitems; i >= 0; i--) {
		backwards.push(str[i]);	
	}
	console.log(backwards);

	return backwards.join('');
}


function reverse2(str){
	return str.split('').reverse().join('');
}


const reverse3 = str => [...str].reverse().join('');


console.log(reverse('Hi My name is Alaina'))
console.log(reverse2('Hi My name is Alaina'))
console.log(reverse3('Hi My name is Alaina'))