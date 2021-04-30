// Create an empty array with 100 places
// Map through each space and give a random number between 0 - 1
// Floor them up
const bigArray = [...Array(100)].map(() => ~~(Math.random() * 100));

// Remove duplications by pushing the array in to a Set()
const bigArrayUnique = [...new Set(bigArray)];

// Print out our big array
console.log(bigArrayUnique);
