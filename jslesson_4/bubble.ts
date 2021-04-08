function bubbleSort(sortMe: number[]): number[] {
  // create a new copy
  const sortMeCopy = [...sortMe];

  // outer loop
  for (let i = 0; i < sortMeCopy.length; i++) {
    console.log(`_outer loop running for the ${i} time`);
    // inner loop
    for (let j = 0; j < sortMeCopy.length - 1; j++) {
      console.log(`__inner loop running for the ${j} time`);
      console.log(
        `___inner loop compares ${sortMeCopy[j]} against ${sortMeCopy[j + 1]}`
      );
      // condition / check
      if (sortMeCopy[j] > sortMeCopy[j + 1]) {
        // swap
        [sortMeCopy[j], sortMeCopy[j + 1]] = [sortMeCopy[j + 1], sortMeCopy[j]];
      }
    }
  }

  // return result after the loops
  return sortMeCopy;
}

const unsorted = [1999, 100, 7, 67, 11, 1, 3];
const sorted = bubbleSort(unsorted);

console.log("Unsorted array 👉🏻", unsorted);
console.log("Sorted array 👍🏻", sorted);
