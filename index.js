const nums = [3, 0, 1, 2, 4, 5, 6, 7, 9];
const sortedNums = nums.sort();

for (let i = 0; i <= sortedNums.length - 1; i++) {
  if (sortedNums[i] != i) {
    console.log("missing value is ", i); // to find the missing value
  }
}
// console.log(type);
