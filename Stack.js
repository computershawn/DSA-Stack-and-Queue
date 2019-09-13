class StackNode {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  peek() {
    // If there is nothing in the stack
    if (!this.top) console.log('Stack is empty')
    // Otherwise return the value
    console.log(this.top.value)
  }

  push(value) {
    let head = this.top
    let newNode = new StackNode(value, head)
    if (!head) {
      this.top = newNode
    } else {
      newNode.next = head
      this.top = newNode
    }
  }

  pop() {
    let head = this.top
    // If there is nothing in the stack
    if (!head) return 'Stack is rempty'

    // Otherwise set top to the 'next' node after first item
    this.top = head.next

    // And then return the value stored in head
    return head.value
  }
}

const main = () => {
  let myStack = new Stack()
  myStack.push('10')
  myStack.push('20')
  myStack.push('30')
  myStack.push('40')
  myStack.push('50')
  myStack.peek()
}

main()