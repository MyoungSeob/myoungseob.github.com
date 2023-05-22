// 짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 
// 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 문자열 S가 주어졌을 때, 
// 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.
// 예를 들어, 문자열 S = baabaa 라면
// b aa baa → bb aa → aa →
// 의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

function solution(s)
{   
    let sList = s.split('');
    let blankList = [];
 
    for(let i = 0; i < sList.length ; i ++){
        if(blankList.length === 0 ){
            blankList.push(sList[i]);
            // 빈 배열이 비어있는 경우(맨 처음 or 같은 문자끼라 만나 사라지고 배열이 비어있게 된 경우)
        }else if(blankList[blankList.length - 1] === sList[i]){
            blankList.pop()
            // 가장 나중에 들어간 문자와 현재 순서의 문자가 같은 경우 뽑아낸다(stack)
        }else{
            blankList.push(sList[i]);
            // 같지 않다면 현재 순서의 문자를 배열에 넣는다
        }
    }
    var answer = blankList.length > 0 ? 0 : 1;
    // blankList에 들어있는 문자가 있다면 0, 없다면 1을 return한다.
    return answer;
}