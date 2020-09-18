// Linked List -- We have 3 types of Linked List => singly, doubly, circular
// Most common DS after array
// Grown and shrink automatically
// Each node has value and address of the next node in a list
// first node is "Head" and last node is "Tail"
// Lookup for lists' Big O is O(n) -- for both of value and index
// Lookup for lists' Big O is O(n) -- for both of value and index
// Read [https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3]

// Insert to beginning is O(1), to middle is O(n) , to end is O(1)
// Delete from beggining is O(1), from middle is O(n), from end is O(n)

// Implement Linked list
class Node {
  constructor( data, next = null ) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
    constructor () { // List is empty at first
        this.head = null;
        this.size = 0;
    }
    // Insert at first
    insertFirst ( data ) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert Last 
    insertLast ( data ) {
        let node = new Node( data );
        let current;

        // If empty, make head
        if ( !this.head ) {
            this.head = node;
        } else {
            current = this.head;
            while ( current.next ) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;

    }

    // Insert at index
    insertAt ( data, index ) {
        // Out of range
        if ( index < 0 && index > this.size ) {
            return;
        }

        //insert at first
        if ( index === 0 ) {
            this.insertFirst(data);
            return;
        }

        let node = new Node ( data );
        let previous, current;

        // set current to first
        current = this.head;
        let count = 0;

        while ( count < index ) {
            previous = current; // Node before index
            current = current.next; // Node after index
            count++;
        }

        node.next = current;
        previous.next = node;
        this.size++;

    }


    // Remove at
    removeAt ( index ) {
        if ( index < 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if ( index === 0) {
            this.head = current.next;
        } else {
            while ( count < index ) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Reverse List
    reverseList() {
        let previous = this.head;
        let current = this.head.next;
        while ( current ) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
    }
}