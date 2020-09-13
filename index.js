// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(facts) {
  let arr = [];
  let i = 0;
  while (i < facts.length) {
    arr.push(`${facts[i]}!!!`)
    i++
  }
  return arr;
}

function iLoveTheBeatles(number) {
  let arr = [];
  let i = 15 - number;
  do {
    i++;
    arr.push("I love the Beatles!");
  } while (i < 15);
  
  return arr;
}