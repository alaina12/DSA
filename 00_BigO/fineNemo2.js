// what is goood  code?
// Being scalable 
// Being readable
// Time Complexity

//#1 -- For loop in javascript
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const  nemo = ['nemo'];
const everyone = ['dory','bruce','marlin','nemo', 
'gill', ' bloat','nigel','squirt','darla','hank'];
const large = new Array(10).fill('nemo');

function findNemo(fish){
	let t0 = performance.now();
	for (let i = 0; i < fish.length; i++) {
		if (fish[i] == 'nemo') {
			console.log('Found Nemo!');
		}
	}
	let t1 = performance.now();
	console.log("call to find nemo took " + (t1 - t0) + 'milliseconds.');
}
findNemo(everyone)