// reversing the given linkedList

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = {
			value: value,
			next: null,
		};
		console.log(newNode);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value){
		const newNode = {
			value: value,
			next: null,
		};
		newNode.next = this.head;
		this.head = newNode;
		return this;
	}
	 printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return console.log(array);
    }
    insert(index, value) {
      //Check for proper parameters;
      if (index >= this.length) {
        console.log("yes");
        return this.append(value);
      }
  
      const newNode = {
        value: value,
        next: null,
      };
      const leader = this.traverseToIndex(index - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
    	// Check Parameters
      	const leader = this.traverseToIndex(index - 1);
      	const unwantedNode = leader.next;
      	leader.next = unwantedNode.next;
      	this.length--;
      	return this.printList();
    }
    reverse() {
    	if (!this.head.next) {
    		return this.head;
    	}
    	let first = this.head;
    	this.rail = this.head;
    	let second = first.next;
    	while(second) {
    		const temp = second.next;
    		second.next = first;
    		first = second;
    		second = temp;
    	}
    	this.head.next = null;
    	this.head = first;
    	return this.printList();
    }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.insert(20, 88));
console.log(myLinkedList.printList());
console.log(myLinkedList.remove(2));
console.log(myLinkedList.reverse());