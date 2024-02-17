const solution = (arr) => {
  let leftPoint;
  let rightPoint;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let tmpSum = 0;
      leftPoint = i;
      rightPoint = j;
      arr.forEach((height, index) => {
        if (index !== i && index !== j) {
          tmpSum += height;
        }
      });

      if (tmpSum === 100) {
        return arr.filter((height, index) => index !== i && index !== j);
      }
    }
  }
};

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
