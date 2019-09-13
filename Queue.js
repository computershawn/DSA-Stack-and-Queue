class NodeItem {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }


  peek() {
    // If there is nothing in the stack
    if (!this.first) {
      console.log(':: PEEK | Queue is empty')
      return
    }
    
    // Otherwise return the value
    console.log(`:: PEEK | '${this.first.value}'`)
  }

  enqueue(value) {
    const newNode = new NodeItem(value)

    // If empty...
    if (!this.first) {
      this.first = newNode
    }

    // Otherwise...
    if (this.last) {
      this.last.next = newNode
    }
     this.last = newNode

    console.log(`:: ENQUEUE | Added '${value}'`)
  }

  deQueue() {
    if (!this.first){
      console.log('Queue is empty')
    }
    const newNode = this.first
    this.first = this.first.next
    if(newNode === this.last) {
      this.last = null
    }
    return newNode.value
  }
}

// 6. Create a queue using Singly linked list
const main = () => {
  console.log('\n--------\n')
  let myQueue = new Queue()
  myQueue.enqueue('A')
  myQueue.enqueue('B')
  myQueue.enqueue('C')
  myQueue.enqueue('D')
  myQueue.enqueue('E')
  myQueue.peek()
  console.log('\n--------\n')
  myQueue.deQueue()
  myQueue.peek()
  console.log('\n--------\n')
}

main();

const starTrekQ = new Queue();

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
console.log(starTrekQ);
// console.log(starTrekQ.deQueue())
// console.log(starTrekQ.deQueue())
// console.log(starTrekQ.deQueue())
// console.log(starTrekQ.deQueue())
// console.log(starTrekQ.deQueue())

function peek(q) {
    // If there is nothing in the stack
    if (!q.first) {
      console.log(':: PEEK | Queue is empty')
      return
    }
    // Otherwise return the value
    console.log(`:: PEEK | '${q.first.value}'`)
  }

  peek(starTrekQ);

function isEmpty(q) {
  if (!q.first) {
    return 'This queue is empty'
  } else {
    return 'The queue is not empty'
  }
}

console.log(isEmpty(starTrekQ));
let emptyQ = new Queue();
console.log(isEmpty(emptyQ));

function display(q) {
  let current = q.first;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

display(starTrekQ);
starTrekQ.deQueue()
console.log(starTrekQ)