let user = {
	name: 'Kyle',
	age : 56,
	magic : true,
	scream: function() {
		console.log('aaaaaaaah!');
	}
}

console.log(user.name); // Lookup O(1)
user.spell = 'abra kadabra'; // Insert O(1)
console.log(user);