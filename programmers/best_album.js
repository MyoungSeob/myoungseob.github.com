// O(n), O(log n)
// 재생수가 높은 장르 먼저 수록 -> 장르 내 재생수가 높은 곡 먼저 수록 -> 재생수가 같으면 고유 번호가 낮은 노래 먼저 수록
// genre의 index가 고유번호가 된다
// genre와 plays 배열의 길이는 같다.

function solution(genres, plays) {
  let album = new Map();
  genres.forEach((item, index) => {
    const { songInfo, totalPlay } = album.get(item) ?? {
      songInfo: [],
      totalPlay: 0,
    };
    album.set(item, {
      totalPlay: totalPlay + plays[index],
      songInfo: (songInfo === undefined
        ? [[index, plays[index]]]
        : [...songInfo, [index, plays[index]]]
      )
        .sort((a, b) => {
          return b[1] - a[1];
        })
        .slice(0, 2),
    });
  });
  const result = [...album]
    .sort((a, b) => {
      return b[1].totalPlay - a[1].totalPlay;
    })
    .map((item) => {
      return item[1].songInfo;
    })
    .flatMap((item) => {
      console.log(item)
      return item
    })

  console.log(result);
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
