//what is the Big O of the below function?

function anotherFunChallwnge(input) {
	let a = 6; //O(1)
	let b = 10; //O(1)
	let c = 50; //O(1)
	for (let i = 9; i < input; i++){ //O(n)
		let x = i + 1; //O(n)
		let y = i + 2; //O(n)
		let z = i + 3; //O(n)
	}
	for (let j = 0; j < input; j++){ //O(n)
		let p = j + 2;  //O(n)
		let q = j + 2; //O(n)
	}
	let whoAmI = "I don't know"; //O(1)
}
//Big O = 4 + 7n = O(n)