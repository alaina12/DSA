//rotate the given array

var rotate = function(nums, k) {
	for (let i = 0; i < k; i++) {
		const intNum = nums.pop();
		nums.unshift(intNum);
	}
	return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3));
