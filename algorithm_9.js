// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers는 길이 1 이상 7 이하인 문자열입니다.
// numbers는 0~9까지 숫자만으로 이루어져 있습니다.
// "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
// 입출력 예
// numbers	return
// "17"	3
// "011"	2
// 입출력 예 설명
// 예제 #1
// [1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

// 예제 #2
// [0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

// 11과 011은 같은 숫자로 취급합니다.
const getCombinations = function(arr, selectNumber){
    const results = [];
    if(selectNumber === 1){
        // 배열 중 1개만 뽑는 경우 그냥 나열한다.
        return arr.map((value) => [value]);
    }
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const combinations = getCombinations(rest, selectNumber -1);
        const attached = combinations.map((combination) => [fixed, ...combination].join(''));
        results.push(...attached);

    });
    return results
}
// 조합 구하는 함수
function solution(numbers) {
    var answer = [];
    for(let i =0; i < numbers.length+1; i++){
        // 주어진 값을 조합하여 나타내고, forEach문과 소수를 구하는 함수를 이용하여 answer라는 배열에 넣어준다.
        getCombinations([...numbers], i).forEach(v => isPrime(parseInt(v)) ? answer.push(parseInt(v)) : "")
    }
    function isPrime(n) {
        if(n <= 1){
            return false;
        }
        if(n == 2){
            return true;
        }
        for(let i = 2; i*i <= n; i++){
            if(n%i === 0){
                return false
            }
        }
        return true;
    }
    // 소수구하는 함수, 소수는 소수의 제곱근보다 작은 자연수로 나눌 수 없다. ex) 11이면 3이하의 자연수로 나눌 수 없음(1 제외)
    const finalAnswer = [...new Set(answer)]
    // 중복된 값을 제거하기 위해 new Set함수 사용
    return finalAnswer.length;
}
