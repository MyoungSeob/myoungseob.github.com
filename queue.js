// Node를 요소로 생각하면 될듯
class Node {
  constructor(value) {
    // 요소의 값은 value(파라미터)
    this.value = value;
    // 다음 값은 없으므로 null
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    // this.head는 배열의 0번째 요소
    this.head = null;
    // this.tail은 배열의 마지막 요소
    this.tail = null;
    // Queue의 크기
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    // this.head가 null인 경우는 Queue가 빈 배열인 경우
    if (this.head === null) {
      // 배열의 요소가 1개인 경우에는 head와 tail이 같음
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

class ArrayQueue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution1(priorities, location) {
  const queue = new LinkedListQueue();
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }
  console.log(queue);

  priorities.sort((a, b) => {
    return b - a;
  });

  let count = 0;

  while (queue.size > 0) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
}

function solution2(priorities, location) {
  const queue = new ArrayQueue();
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }
  priorities.sort((a, b) => b - a);
  let count = 0;
  while (queue.size() !== 0) {
    const [priority, index] = queue.peek();
    if (priority < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      count++;
      const [myPriority, myIndex] = queue.dequeue();
      if (location === myIndex) {
        return count;
      }
    }
  }
}

console.log(solution2([2, 1, 3, 2], 2));
