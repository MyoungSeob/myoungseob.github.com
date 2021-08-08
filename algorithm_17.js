function solution(s) {
    var answer = 0;
    if(s.length === 1) return 1;
    let tmp = [];
    for(let i = 1; i < parseInt(s.length / 2); i++){
        let count = 1;
        let str = '';
        for(let j=0; j<s.length; j+=i){
            const current = s.substr(j, i);
            const next = s.substr(j+i, i);
            if(current === next){
                count ++;
            }else{
                str = count > 1 ? str + count + current : str + current;
                count = 1
            }
        }
        tmp.push(str.length)
    }
    return Math.min(...tmp);
}

// substr(a, b) ==> a부터 b-1까지의 배열
// ex) let a = "myoung"
// a.substr(1, 3) = yo

// console.log(solution("aabbaccc"))