const arr = [1, 2, 3, 4, 5];

for(let index in arr){
    console.log(arr[index]);
}
console.log('-------------');
const obj = {
    a: 1,
    b: 2,
    c: 3
};

for(let key in obj){
    console.log(key + " - " +obj[key]);
}