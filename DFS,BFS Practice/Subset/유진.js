// 가능한 모든 선택지를 고려하고
// 스택을 사용하여 현재 부분집합에서 다음에 추가할 수 있는 원소를 고려하는 것이 핵심
const subsets = (nums) => {
  const result = [];
  const stack = [];
  stack.push([]);

  while (stack.length > 0) {
    const subset = stack.pop(); //[3]
    result.push(subset);
    const lastSubset = subset[subset.length - 1];
    const lastIndex = nums.indexOf(lastSubset) + 1;

    // 현재 부분집합에서 하나의 원소를 추가하여 새로운 부분집합 생성 후 스택에 추가
    for (let i = lastIndex; i < nums.length; i++) {
      stack.push(subset.concat(nums[i]));
    }
  }
  //빈배열제거
  return result.filter((subset) => subset.length > 0);
};

// 테스트
const nums = [1, 2, 3];
subsets(nums).forEach((e) => {
  // 모든 부분집합 출력
  console.log(e.join(" "));
});
