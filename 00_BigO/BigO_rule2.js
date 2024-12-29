//Rule Book for Big O
// 1. Worst case
// 2. Remove constants
// 3. Different terms for input
// 4. Drop non dominants

//Rule 2
function printFirstitemThenFirstHalsThenSayHi100Times(items){
	console.log(items[0]);

	var middleIndex = Math.floor(items.length / 2);
	var index = 0;

	while (index < middleIndex) {
		console.log(items[index]);
		index++;
	}

	for (var i = 0; i<100; i++){
		console.log('hi');
	}
}