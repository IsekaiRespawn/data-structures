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

class Stack {
    top = null;

    add(value) {
        const newNode = new Node(value);
        if(this.top) {
            newNode.bottom = this.top;
            this.top.top = newNode;
            this.top = newNode;
        }
        this.top = newNode;
    };

    remove() {
        
        if (this.top) {

            const oldTop = this.top; 
            this.top = this.top.bottom; 

            if (this.top) {
                this.top.top = null; 
            }

            oldTop.bottom = null; 
        }
    }

    print() {
        let pointer = this.top;

        while(pointer) {
            console.log(pointer.value);
            pointer = pointer.bottom;
        }
    }

}

const stack = new Stack();

stack.add(5);
stack.add(1);
stack.add(3);
stack.remove();

stack.print();