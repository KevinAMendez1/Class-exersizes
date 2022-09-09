const arr = [true, false, true, false, true, false, false, true, false, true];
const counts = {};

for (num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[true]);