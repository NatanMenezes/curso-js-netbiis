let arr = [1, 2, 3, 4, 5, 6];

const subArr = arr.slice(1, 4);
console.log(subArr);
console.log(arr);

const remove = arr.splice(1, 3, 7, 8);
console.log(remove);
console.log(arr);