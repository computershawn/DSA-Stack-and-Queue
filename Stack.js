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

// 1. Create a stack class
let starTrek = new Stack()
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')
// starTrek.peek()


// 2. Useful methods for a stack
// function peak() {
//   starTrek.peek();
// }

// peak();

// function isEmpty(stack) {
//   if (!stack.top) {
//     return true;
//   }
//   return false;
// }

// console.log(isEmpty(starTrek));

// function display(stack) {
//   let current = stack.top;
//   while (current) {
//     console.log(current.value);
//     current = current.next;
//   }
// }

// display(starTrek);

// console.log(starTrek.pop());
// console.log(starTrek.pop());
// console.log(starTrek);

// 3. Check for palindromes using a stack
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let newStack = new Stack();
    s.split('').forEach((char) => {
      newStack.push(char);
    })
    let reverseStr = ''
    let count = 0;
    while(count < s.length) {
      count ++;
      reverseStr += newStack.pop();
    }
    return s === reverseStr
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

// 4. Matching parentheses in an expression
function matchingParens(s) {
  // s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let newStack = new Stack();
  s.split('').forEach((char) => {
    newStack.push(char);
  })
  let count = 0;
  let i = 0;
  while( i < s.length ) {
    let paren = newStack.pop();
    if (paren === "(") {
      count++;
      if(count > 0) {
        return 'missing closing parenthesis at index ' + i
      }
    } else if (paren === ")") {
      count--;
    } 
    i++;
  }
  if ( count > 0 ) {
    return 'you are missing a )'
  } else if ( count < 0 ) {
    return 'you are missing a ('
  } else {
    return 'You are all set on your parentheses.'
  }
}

console.log(matchingParens('(())'));
console.log(matchingParens('())'));
console.log(matchingParens('(()'));
console.log(matchingParens(')('));

