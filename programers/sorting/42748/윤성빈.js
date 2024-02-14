function solution(array, commands) {
  let answer = [];

  for (i = 0; i < commands.length; i++) {
    let temp_arr = [];
    let index = commands[i][2] - 1;

    if (commands[i][0] === commands[i][1]) {
      temp_arr.push(array[commands[i][0] - 1]);
    } else {
      for (j = commands[i][0]; j <= commands[i][1]; j++) {
        temp_arr.push(array[j - 1]);
      }
    }

    temp_arr.sort((a, b) => a - b);
    answer.push(temp_arr[index]);
  }
  return answer;
}
