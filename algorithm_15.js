function solution(array, commands) {
    var answer = [];
    var count = 0;
    while(count < commands.length){
        let temp = [];
        for(let i = commands[count][0] - 1; i < commands[count][1]; i++){
            temp.push(array[i])
        }
        temp.sort((a, b) => a - b);
        answer.push(temp[commands[count][2] - 1])
        count++
    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))