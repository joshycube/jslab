// f(x) = 2x
const f = (x: number): number => x * 2;
console.log(f(100));

// f(g(x))
function curried(x: number): Function {
  const a = x * 2;

  return function (y: number) {
    return a * y;
  };
}

const result0 = curried(10)(5);
console.log(result0);

// FP
const decCurry = (x: number) => (y: number) => x * 2 * y;

const result1 = decCurry(10)(5);
console.log(result1);
