class Queue {
  #array;
  #head = 0;
  #tail = 0;

  constructor(arr) {
    this.#array = arr;
    this.#tail = arr.length - 1;
  }

  shift() {
    const element = this.#array[this.#head];
    this.#head += 1;
    return element;
  }

  push(element) {
    this.#array.push(element);
    this.#tail += 1;
  }

  size() {
    return this.#tail - this.#head + 1;
  }

  max() {
    const arr = [];
    for (let i = this.#head; i <= this.#tail; i++) {
      arr.push(this.#array[i].priority);
    }
    return Math.max(...arr);
  }
}

function solution(priorities, location) {
  let answer = 0;
  const arr = priorities.map((item, index) => {
    return {
      priority: item,
      index,
    };
  });

  const queue = new Queue(arr);

  while (queue.size() - 1 !== 0) {
    const max = queue.max();
    const current = queue.shift();

    if (current.priority === max) {
      answer += 1;
      if (current.index === location) {
        break;
      }
    } else {
      queue.push(current);
    }
  }

  return answer;
}

solution([1, 1, 9, 1, 1, 1], 0);
