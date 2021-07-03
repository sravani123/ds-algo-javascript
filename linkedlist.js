class Node {

    constructor(data) {
        this.data = data;
        this.next = null;

    }
}
class LinkedinList {
    constructor() {
        this.head = null;
    }
    addNode = (data) => {
        if (this.head === null || this.head === undefined) {
            this.head = new Node(data);
        } else {
            let currentNode = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(data);
        }
    }
    addNodeAtPosition = (position, data) => {
        let node = new Node(data);
        let currentNode = this.head;
        if (position == 0) {
            this.head = node;
            node.next = currentNode;
            return;
        }
        let counter = 0;
        while (counter != position) {
            currentNode = currentNode.next;
            counter++;
        }
        let prevNode = currentNode;
        let nextNode = prevNode.next;
        prevNode.next = node;
        node.next = nextNode;
        return;

    }
    deleteNodeByData = (data) => {
        if (this.head === null || this.head === undefined) {
            return null;
        }
        let currentNode = this.head;
        if (currentNode.data == data) {
            this.head = currentNode.next;
            return;
        }
        let nextNode = currentNode.next;
        while (nextNode != null) {
            if (nextNode.data === data) {
                currentNode.next = nextNode.next;
                return;
            }
            currentNode = currentNode.next;
            nextNode = nextNode.next;
        }
    }
    deleteNodeAtPosition = (position) => {
        let currentNode = this.head;
        if (position === 0) {
             this.head = currentNode.next;
             return;
        }
        let counter = 0;
        let prevNode = currentNode;
        if (counter != position) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            counter++;
        }
        let nextNode = currentNode.next;
        prevNode.next = nextNode;
        currentNode.next = nextNode.next;
        return;

    }
    getNodeAtPosition = (position) => {
        if (position == 0) {
            return this.head.data;
        }
        let currentNode = this.head;
        let counter = 0;
        while (currentNode.next != null) {
            if (position === counter) {
                return currentNode.data;
            }
            currentNode = currentNode.next;
            counter++;
        }
    }
    printLinkedList() {
        let result = [];
        let temp = this.head;
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(' => '));
    };
}
const ll = new LinkedinList();
ll.addNode(20);
ll.addNode(30);
ll.addNode(40);
ll.addNode(50);
ll.addNode(60);
ll.addNode(70);
ll.printLinkedList();
ll.deleteNodeByData(40);
ll.printLinkedList();
ll.addNodeAtPosition( 4,47);
ll.printLinkedList();
ll.getNodeAtPosition(2);
ll.deleteNodeAtPosition(1);
ll.printLinkedList();

