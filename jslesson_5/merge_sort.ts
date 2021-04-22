const sortMe = [78, 83, 54, 20];

let m = 0;
let l = 0;
let r = 0;

function merge(left: number[], right: number[]): number[] {
  m++;
  const sign = " ".repeat(m - 1);
  console.log(
    `${sign} merge() was called with arrays: ${left} and ${right} for the ${m}x time(s)`
  );

  const temp: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
  }

  console.log(`${sign} => merge() temp was: [${temp}]`);
  console.log(
    `${sign} => merge() has returned: [${[...temp, ...left, ...right]}]`
  );
  return [...temp, ...left, ...right];
}

function mergeSort(subject: number[], side: string = "both"): number[] {
  side === "left" ? l++ : r++;

  const sign = " ".repeat(side === "left" ? l : r);

  const arrayLength = subject.length;

  console.log(
    `${sign} mergeSort() sort was called on side: [${side}] with length: ${arrayLength} for the ${
      side === "left" ? l : r
    }x time(s)`
  );

  if (arrayLength < 2) {
    return subject;
  }

  const halfIndex = arrayLength / 2;

  const left = subject.slice(0, halfIndex);
  const right = subject.slice(halfIndex, arrayLength);

  return merge(mergeSort(left, "left"), mergeSort(right, "right"));
}

const resultSorted = mergeSort(sortMe);
console.log(resultSorted);

console.log(
  `merge sort was called ${l + r} times and merge was called ${m} times`
);
