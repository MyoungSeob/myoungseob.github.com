class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  push(value) {
    this.queue[this.rear++] = value;
  }

  shift() {
    const value = this.queue[this.front];
    this.front += 1;
    return value;
  }

  sum() {
    return this.queue.slice(this.front, this.rear).reduce((a, b) => {
      return a + b;
    }, 0);
  }

  max() {
    return Math.max(...this.queue.slice(this.front, this.rear));
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(queue1, queue2) {
  const sumOfQueue = [...queue1, ...queue2].reduce((a, b) => {
    return a + b;
  }, 0);
  if (sumOfQueue % 2 === 1) {
    return -1;
  }

  const Que1 = new Queue();
  const Que2 = new Queue();
  for (let i = 0; i < queue1.length; i++) {
    Que1.push(queue1[i]);
    Que2.push(queue2[i]);
  }

  let count = 0;

  while (count !== queue1.length * 3) {
    if (Que1.sum() < sumOfQueue / 2) {
      Que1.push(Que2.shift());
      count++;
    } else if (Que1.sum() > sumOfQueue / 2) {
      Que2.push(Que1.shift());
      count++;
    } else {
      break;
    }
  }
  return count === queue1.length * 3 ? -1 : count;
}
