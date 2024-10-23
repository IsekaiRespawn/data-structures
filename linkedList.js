class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        const newNode = new Node(value);
        if (this.head) {
            newNode.bottom = this.head;
            this.head.top = newNode;
            this.head = newNode;
        } else {
            this.head = this.tail = newNode;
        }
    }

    addToTail(value) {
        const newNode = new Node(value);
        if (this.tail) {
            newNode.top = this.tail;
            this.tail.bottom = newNode;
            this.tail = newNode;
        } else {
            this.head = this.tail = newNode;
        }
    }

    removeHead() {
        if (!this.head) return;
        const oldHead = this.head;
        this.head = this.head.bottom;

        if (this.head) {
            this.head.top = null;
        } else {
            this.tail = null;
        }

        oldHead.bottom = null;
    }

    removeTail() {
        if (!this.tail) return;
        const oldTail = this.tail;
        this.tail = this.tail.top;

        if (this.tail) {
            this.tail.bottom = null;
        } else {
            this.head = null;
        }

        oldTail.top = null;
    }

    printForward() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.bottom;
        }
    }

    printBackward() {
        let currentNode = this.tail;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.top;
        }
    }
}

const list = new LinkedList();
list.addToHead(10);
list.addToTail(20);
list.addToHead(5);
list.printForward();  
list.removeHead();
list.printForward();  
list.removeTail();
list.printForward();  
