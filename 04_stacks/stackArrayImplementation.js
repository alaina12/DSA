// Implementing stack using Array dataStructure
// LIFO
//google
//udemy.com
// //youtube
// class Node{
// 	constructor(value){
// 		this.array = []
// 	}
// }

class Stack {
	constructor(){
		this.array = []
		}
	peek() {
		return this.array[this.array.length-1];
	}
	push(value){
		this.array.push(value);
		return this;

	}
	pop(){
		this.array.pop();
		return this;
	}
}

const myStack = new Stack();
console.log(myStack.peek())
console.log(myStack.push('google'));
console.log(myStack.push('ztm'));
console.log(myStack.push('discord'));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());

