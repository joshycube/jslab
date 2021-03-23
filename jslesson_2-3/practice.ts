// 0...10
// [0,1,2,3,4,5,6....]
// [10, 9, 8, 7]

function countToTen(limit: number) {
  const numbers = [];

  for (let i = 0; i <= limit; i++) {
    numbers.push(i);
  }

  return numbers.reverse();
}

let result = countToTen(10);

console.log(result);

result = countToTen(100);

console.log(result);
