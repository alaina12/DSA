function LongestWord(sen) {
	const arrWords = sen.split(' ');
	const regularExpression = /^[a-zA-Z0-9ñáéíóúÁÉÍÓÚÑ ,.'-]+$/u;

	let strLonger = "";

	for (let stringSen of arrWords){
		if (regularExpression.test(stringSen) && stringSen.length > strLonger.length) {
			strLonger = stringSen;
		}
	}

	return strLonger;
}

console.log(LongestWords(readline()));