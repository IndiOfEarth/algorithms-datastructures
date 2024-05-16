// Playing with linked lists

// 1. Linked Lists with Objects
var head = null;
// Linked list in object form
head = {data: 5, 
		next: null};
console.log(head);
console.log(head.data);
console.log(head.next);

// 2. Constructor function to add to linked list
// - Each node in the linked list is an instantiation of constructor

function LLNode(data) {
	this.data = data;
	this.next = null; // setting the next pointer to null. This will be changed
}

var head = new LLNode(5);
console.log(head);
console.log(head.data);
console.log(head.next);

// Adding more nodes
head.next = new LLNode(10);
console.log(head.next.data);
console.log(head.next.next);

// Exercise 1 - Construct a linked list through repeated use of the LLNode constructor
head.next.next = new LLNode(15);
console.log(head.next.next.data);
console.log(head.next.next.next);

// Searching a linked list
function searchLL(head, item) {
	var temp = head;
	while(temp !== null) {
		 if (temp.data === item) {
			console.log("Found");
			return true;
		 }
		 temp = temp.next; // goes to next item in the linked list
	}
	return false;
}

searchLL(head, 15);

// Searching a linked list for number of occurrences
function numberLL(head, item) {
	var n = 0; // n is the number of occurrences of item in the linked list
	while(temp !== null) {
		if (temp.data === item) {
			n += 1;
		}
		temp = temp.next;
	}
	return n;
}