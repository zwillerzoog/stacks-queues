function createNode(data = null, next = null, prev = null) {
  return {
    data,
    next,
    prev
  };
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = createNode(data);

    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }

    this.last = node;

    if (this.first === null) {
      this.first = node;
    }
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    return node.data;
  }
}

//other funcitons that uses the queue class

function display() {
  let node = q.first;
  while (node !== null) {
    console.log(node.data);
    node = node.prev;
  }
}

let q = new Queue();
q.enqueue('Tauhida');
q.enqueue('Joe');
q.enqueue('Tim');
// display();
// console.log(q.dequeue());
// dispslay();
q.enqueue('Alison');
q.enqueue('Chris');
// console.log(q.dequeue());
// display();

//Jane Madonna Beyonce
//Frank John Sherlock Madonna David Christopher

let pairs = new Queue();
pairs.enqueue({
  species: 'human',
  name: 'Jane'
});
pairs.enqueue({
  species: 'dog',
  name: 'Emma'
});
pairs.enqueue({
  species: 'dog',
  name: 'Todd'
});
pairs.enqueue({
  species: 'human',
  name: 'Madonna'
});
pairs.enqueue({
  species: 'human',
  name: 'Molly'
});
pairs.enqueue({
  species: 'human',
  name: 'Obama'
});
pairs.enqueue({
  species: 'dog',
  name: 'Beau'
});
pairs.enqueue({
  species: 'human',
  name: 'Paul'
});

/** 
 * Takes a queue of people and pairs them off by gender
 * @param {Queue} q - a Queue object
 * @returns {Queue} a new Queue of pairs
*/

// console.log(pairs.first.data.species);
// console.log(pairs);

function dogsAndOwners(q) {
  let dogQueue = new Queue();
  let humanQueue = new Queue();
  let companionQueue = new Queue();
  //for loop through pairs queue, pairing human and dog

  //separate dogs/humans pair dog[0]=human[0]
  //find human, look for the next dog, push them together
  //in a queue
  let currentNode = q.first;
  let node = q.first.prev;

  while (
    q.first !== null &&
    (q.first.data.species == 'human' || q.first.data.species == 'dog')
  ) {
    if (q.first.data.species == 'human') {
      humanQueue.enqueue(q.dequeue());
    } else if (q.first.data.species == 'dog') {
      dogQueue.enqueue(q.dequeue());
    }
    // console.log('dog', dogQueue);
  }
  while (humanQueue.first !== null && dogQueue.first !== null) {
    companionQueue.enqueue({
      human: humanQueue.first.data.name,
      dog: dogQueue.first.data.name
    });
    // console.log(companionQueue);
    humanQueue.dequeue();
    dogQueue.dequeue();
  }
 return companionQueue;
}

// console.log(dogsAndOwners(pairs));


//bank queue
// argument = list queue
//randomize by 1/4
//return what the line looks like?

let bankQueue = new Queue();
bankQueue.enqueue('Tauhida');
bankQueue.enqueue('Joe');
bankQueue.enqueue('Tim');
bankQueue.enqueue('Tausdfsfshida');
bankQueue.enqueue('Jopepepe');
bankQueue.enqueue('T');
bankQueue.enqueue('I');
bankQueue.enqueue('J');
bankQueue.enqueue('m');
bankQueue.enqueue('i');

function bank(q) {
    for (let i = 0; i < 10; i++) {
        // console.log('hi')
        let randomNum = Math.floor(Math.random()*16);
        // console.log(randomNum);
        // 1/4 send to back?
       if (randomNum > 12) {
           console.log('hi')
            q.enqueue(q.dequeue());
            console.log('1/4: ', q)
        } else {
        q.dequeue()}
        console.log('3/4: ', q)
        // 3/4 q.deq 
        // stuff
    }
}

bank(bankQueue);