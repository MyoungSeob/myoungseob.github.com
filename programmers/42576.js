function solution(participant, completion) {
  const map = new Map();

  participant.forEach((item, index) => {
    map.set(item, {
      sameName: map.has(item) ? map.get(item).sameName + 1 : 0,
    });
    if (index < participant.length) {

    }
    
  });

  completion.forEach((item) => {
    const sameNameCount = map.get(item).sameName;

    sameNameCount > 0
      ? map.set(item, { sameName: sameNameCount - 1 })
      : map.delete(item);
  });

  return [...map.keys()][0]
}

solution(["mislav", "stanko", "mislav", "ana"], ["mislav", "stanko", "ana"])
