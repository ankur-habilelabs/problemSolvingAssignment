let data = [2, 7, 11, 15];
let target = 9;
// console.log("in file")
for (let i = 0; i <= data.length; i++) {
  // console.log("in the i loop")
  for (let j = data.length - 1; j >= 0; j--) {
    // console.log("in th ej loop ")
    if (data[i] + data[j] == target) {
      console.log("find at position [", i, j, "]"); // to get position of value

      i = data.length; //to exit loop
    }
  }
  //   console.log(data[i]);
}
