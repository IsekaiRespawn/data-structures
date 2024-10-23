class Node {
    value;
    top;
    bottom;

    constructor(value, top = null, bottom = null) {
        this.value = value;
        this.top = top;
        this.bottom = bottom;
    }
}


class Queue {
    bottom = null;

    add(value) {
        const newNode = new Node(value);
        if(this.bottom) {
            newNode.top = this.bottom;
            this.bottom.bottom = newNode;
            this.bottom = newNode;
            return;
        }
        this.bottom = newNode;
    }

    print() {
        let pointer = this.bottom;

        while(pointer) {
            console.log(pointer.value);
            pointer = pointer.top;
        }
    }

    dequeue() {
        if (this.bottom) {
            const oldBottom = this.bottom; 
            this.bottom = this.bottom.top; 
            
            if (this.bottom) {
                this.bottom.bottom = null; 
            }
            
            oldBottom.top = null; 
        }
    }

}

const queue = new Queue();
queue.add("Andi");
queue.add("Edy");
queue.dequeue();

queue.print();