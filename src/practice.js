const numArr = [1, 2, 3, 4, 5];

const sum = numArr.reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(`- accumulator: ${accumulator}`);
  console.log(`- currentValue: ${currentValue}`);
  console.log(`- currentIndex: ${currentIndex}`);
  console.log(`- array: ${array}`);
  console.log();
  return accumulator + currentValue;
}, 0);

console.log(`- sum: ${sum}`);
