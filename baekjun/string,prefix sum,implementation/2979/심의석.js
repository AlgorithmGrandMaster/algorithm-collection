const solution = (data) => {
  const parking = Array.from({ length: 101 }, () => 0);
  const fee = data[0];
  fee.sort((a, b) => a - b); //fee[0]=C, fee[1]=B, fee[2]=A
  const time = data.slice(1);
  const oneFee = fee[2];
  const twoFee = fee[1] * 2;
  const threeFee = fee[0] * 3;

  for (let i = 0; i < time.length; i++) {
    time[i].sort((a, b) => a - b);
    for (let j = time[i][0]; j < time[i][1]; j++) {
      parking[j]++;
    }
  }

  let answer = 0;
  parking.forEach((count) => {
    if (count === 1) answer += oneFee;
    if (count === 2) answer += twoFee;
    if (count === 3) answer += threeFee;
  });

  return answer;
};

// console.log(
//   solution([
//     [5, 3, 1],
//     [1, 6],
//     [3, 5],
//     [2, 8],
//   ])
// );
// 33

console.log(
  solution([
    [10, 8, 6],
    [15, 30],
    [25, 50],
    [70, 80],
  ])
);
// 480
