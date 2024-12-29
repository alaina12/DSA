//given an array nums retutn true if it contains duplicate 
//and false if not

var containDuplicate = function(nums) {
	const objNums = {};

	for (let intNum of nums) {
		if (objNums.hasOwnProperty(intNum)) {
			return true;
		}

		objNums[intNum] = true;
	}

	return false;
};

console.log(containDuplicate([1,1,1,3,3,4,3,2,4,2]));

