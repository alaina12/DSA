// Implementation of LinkedList
// 10-->5-->16

// let myLinkedList = {
// 	head : {
// 		value: 10,
// 		next: {
// 			value: 5,
// 			next: {
// 				value: 16,
// 				next: null
// 			}
// 		}
// 	}
// }
// class Node {
// 	constructor(value){
// 		this.value: value;
// 		this.next: null;
// 	}

// }

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = {
			value: value,
			next: null
		};
		this.tail.next = newNode;
		this.length++;
		return this;
	}
	prepend(value){
		const newNode = {
			value: value,
			next: null
		};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this

	}
	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
	insert(index, value){
		 // check the parameters
		 if (index >= this.length) {
		 	return this.append(value)
		 }
		 const newNode = {
		 	value: value,
		 	next: null,
		 };
		 const leader = this.traverseToIndex(index-1)
		 const holdingPointer = leader.next;
		 leader.next = newNode;
		 newNode.next = holdingPointer;
		 this.length++;
		 return this.printList();

	}
	traverseToIndex(index) {
		//check for params
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index){
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
	remove(index){
		// check params
		const leader = this.traverseToIndex(index-1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
		return this.printList();
	}
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList)
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.insert(2,99))
console.log(myLinkedList.remove(2))
console.log(myLinkedList.printList())

