'use strict';

function createNode(data = null, next = null) {
  return {
    data,
    next
  };
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    //if the top of the stack is empty, then the data will be the
    //top of the stack
    if (this.top === null) {
      this.top = createNode(data);
      return this.top;
    }

    //if the top already has something then create a new node
    //add data to the new node
    // have the pointer point to the top
    const node = createNode(data, this.top);
    this.top = node;
  }

  pop() {
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(s) {
  //if the top of the stack does not have anything
  //then the stack is empty
  //otherwise return what's on the top
  if (s.top === null) {
    return null;
  }
  return s.top.data;
}

function display() {
  // displays the entire contents of the stack
  let node = s.top;
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

// let s = new Stack();

// s.push(1);
// s.push(2);
// s.push("Tauhida");
// console.log("Top of stack:", peek());

// s.pop();
// s.push("joe");
// console.log(s)
// console.log("Top of stack:", peek());

// console.log(display());
//hannah
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    stack.push(currentChar);
  }
  // console.log(stack.top.next);
  for (let i = 0; i < s.length; i++) {
    let currentChar = stack.pop();
    let sChar = s[i];
    // console.log(currentChar)
    // console.log(sChar)
    if (currentChar !== sChar) {
      console.log('her there');
      return false;
    } else if (currentChar == sChar && i == s.length - 1) {
      return true;
    }
  }
}

// true, true, true
// console.log(is_palindrome('hannah'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));

// Paren Matching Function

// Return the position of incorrect or missing
const parenCounter = expression => {
  let parenStack = new Stack();
	let currentChar;
	
  for (let i = 0; i < expression.length; i++) {
    currentChar = expression[i];
    if (currentChar === '(') {
      parenStack.push(i);
    }
    if(currentChar === ')') {
      parenStack.pop();
    }
  }
	
  while (parenStack.top !== null) {
    console.log(peek(parenStack));
    parenStack.pop();
  }

  // console.log('The stack!! : ', parenStack);
};

parenCounter('((((____))');