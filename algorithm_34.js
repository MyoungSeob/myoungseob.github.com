/*
    1. A Queue의 최대 길이는 bridge_length
    2. 
*/

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  push(value) {
    this.queue.push(value);
    this.rear += 1;
  }

  shift() {
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

  weight() {
    if (this.queue.length === 1) return this.queue[this.front];
    const totalTruckWeight = this.queue
      .slice(this.front, this.rear)
      .reduce((a, b) => a + b, 0);
    return totalTruckWeight;
  }

  truckNumberOnBridge() {
    return this.queue.filter((item) => item !== 0).length;
  }
}

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const bridgeQueue = new Queue();
  const truckQueue = new Queue();
  let bridge_sum = 0;

  for (let i = 0; i < bridge_length; i++) {
    bridgeQueue.push(0);
  }

  truck_weights.forEach((item) => {
    truckQueue.push(item);
  });

  answer++;
  bridge_sum += truckQueue.peek();
  bridgeQueue.push(truckQueue.shift());

  while (bridge_sum > 0) {
    answer++;
    bridge_sum -= bridgeQueue.shift();
    if (bridge_sum + truckQueue.peek() <= weight) {
      bridge_sum += truckQueue.peek();
      bridgeQueue.push(truckQueue.shift());
    } else {
      bridgeQueue.push(0);
    }
  }

  return answer;
}

solution(2, 10, [7, 4, 5, 6]);
