// 문제 : https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  // 전체 유저 수 만큼의 배열을 만들고, 각 요소를 0으로 채우기
  const answer = new Array(id_list.length).fill(0);

  // 전체 유저 리스트를 만드는데, 유저 ID를 키값으로 한 객체 만들기
  const reportList = {};
  id_list.map((item) => {
    reportList[item] = [];
  });

  report.map((item) => {
    // 신고 한 유저와 신고 당한 유저로 분리
    const [user, reportUser] = item.split(" ");
    // 동일 유저가 여러번 신고한 경우 중복처리
    if (!reportList[reportUser].includes(user)) {
      reportList[reportUser].push(user);
    }
  });

  for (let i = 0; i < id_list.length; i++) {
    // 신고 횟수가 k번 이상일 경우 처리 결과 메일을 받을 수 있음
    if (reportList[id_list[i]].length >= k) {
      reportList[id_list[i]].map((item) => {
        answer[id_list.indexOf(item)] += 1;
      });
    }
  }
  return answer;
}

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);
