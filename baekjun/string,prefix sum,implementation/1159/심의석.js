const solution = (playerArr) => {
  let sH = new Map();
  let answer = [];

  playerArr.forEach((playerName) => {
    let firstChar = playerName[0];

    if (sH.has(firstChar)) sH.set(firstChar, sH.get(firstChar) + 1);
    else sH.set(firstChar, 1);
  });

  for (let [key, val] of sH) {
    if (val >= 5) answer.push(key);
  }

  if (answer.length === 0) answer = "PREDAJA";

  return answer;
};

console.log(
  solution([
    "babic",
    "keksic",
    "boric",
    "bukic",
    "sarmic",
    "balic",
    "kruzic",
    "hrenovkic",
    "beslic",
    "boksic",
    "krafnic",
    "pecivic",
    "klavirkovic",
    "kukumaric",
    "sunkic",
    "kolacic",
    "kovacic",
    "prijestolonasljednikovi",
  ])
);
// [b,k]
console.log(
  solution(["michael", "jordan", "lebron", "james", "kobe", "bryant"])
);
// "PREDAJA"
